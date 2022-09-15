import { publish } from 'gh-pages';
// refer: https://blog.stranianelli.com/sveltekit-et-github-pages-english/
publish(
  'build', // path to build directory
  {
    branch: 'gh-pages',
    repo: '', // Update to point to your repository
    user: {
      name: 'Saudagar Nazbee', // update to use your name
      email: 'saudagar.nazbee@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
