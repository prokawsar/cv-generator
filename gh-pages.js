import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/prokawsar/cv-generator.git',
		user: {
			name: 'Kawsar Ahmed',
			email: 'prokawsar@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
