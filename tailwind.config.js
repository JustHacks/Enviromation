module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  darkMode: false,
  theme: {
		extend: {
			backgroundImage: theme => ({
				'cow-image': "url('https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1921&q=80')",
				// bg-cow-image
			})
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
