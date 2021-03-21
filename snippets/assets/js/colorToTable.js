(() => {
  const createTableHeader = (data) => {
    return Object.keys(data)
      .map((title) => `<th>${title}</th>`)
      .join('');
  };

  const createCell = (name, entry, key) => {
    const content = entry?.[key] || '-';

    let classes = `color-table__cell color-table__cell--${name}-${key}`;

    if (key > 500 && name !== 'variant' && content !== '-') {
      classes += ' color-table__cell--light';
    }

    return `<td class='${classes}'>${content}</td>`;
  };

  const createTableBody = (data) => {
    const keys = Object.keys(data.variant);

    return keys
      .map((key) => {
        return `
          <tr>
            ${Object.entries(data)
              .map(([name, entry]) => createCell(name, entry, key))
              .join('')}
          </tr>
        `;
      })
      .join('');
  };

  const createTable = (data) => {
    let table = `
      <table class="color-table">
        <thead>
          <tr>
            ${createTableHeader(data)}
          </tr>
        </thead>
        <tbody>
          ${createTableBody(data)}
        </tbody>
      </table>
    `;

    const el = Docsify.dom.create('div', table);

    const entry = Docsify.dom.find('.color-table-entry');

    if (entry) {
      Docsify.dom.before(entry, el);
    }
  };

  const generateStyling = (data) => {
    let code = `
      table.color-table {
        display: table;
        table-layout: fixed;
        color: var(--clr-neutral-900);
        text-align: left;
      }
      .color-table__cell--light {
        color: var(--clr-neutral-100);
      }
    `;

    for (const obj of Object.entries(data)) {
      const [name, entries] = obj;

      if (name === 'variant') continue;

      for (const key of Object.keys(entries)) {
        code += `.color-table__cell--${name}-${key} { background: var(--clr-${name}-${key}) }`;
      }
    }

    Docsify.dom.style(code);
  };

  const colorToTable = (hook) => {
    const stylesheets = [...document.styleSheets];
    const colorSheet = stylesheets.find((sheet) =>
      sheet?.href?.endsWith('colors.css')
    );
    const root = [...colorSheet.cssRules].find(
      (rule) => rule.selectorText === ':root'
    );

    const clrRegex = /--clr-(?<name>[a-z]+)-(?<variant>\d{1,4}):\s?(?<color>#[a-z0-9]{3,6});/gm;
    let match = clrRegex.exec(root.cssText);

    const data = {
      variant: {},
    };

    if (match) {
      do {
        const { name, variant, color } = match.groups;
        data.variant[variant] = variant;

        if (data[name]) {
          data[name][variant] = color;
        } else {
          data[name] = { [variant]: color };
        }
      } while ((match = clrRegex.exec(root.cssText)) !== null);

      hook.doneEach(() => {
        createTable(data);
        generateStyling(data);
      });
    }
  };

  $docsify.plugins = [].concat(colorToTable, $docsify.plugins);
})();
