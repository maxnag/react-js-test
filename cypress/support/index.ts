// @ts-ignore
import addContext from 'mochawesome/addContext';
import './commands';

Cypress.on('test:after:run', (test, runnable) => {
  const titleToFileName = (title: string) => title.replace(/[:\/]/g, '');

  if (test.state === 'failed') {
    let parent = runnable.parent;
    let filename = '';
    const path = Cypress.spec.relative.split(Cypress.testingType);

    while (parent && parent.title) {
      filename = `${titleToFileName(parent.title)} -- ${filename}`;
      parent = parent.parent;
    }

    filename += `${titleToFileName(test.title)} (failed).png`;

    addContext({ test }, `assets/screenshots${path[1]}/${filename}`);

    if (Cypress.config('video')) {
      addContext({ test }, `assets/videos${path[1]}.mp4`);
    }
  }
});
