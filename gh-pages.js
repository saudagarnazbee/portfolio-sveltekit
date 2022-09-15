import { publish } from 'gh-pages';
// refer: https://blog.stranianelli.com/sveltekit-et-github-pages-english/
publish(
  'build', // path to build directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/saudagarnazbee/portfolio-sveltekit', // Update to point to your repository
    user: {
      name: 'Nazrin Zulkifli', // update to use your name
      email: 'saudagar.nazbee@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
