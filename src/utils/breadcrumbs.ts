const createBreadcrumbs = (path: string, title: string, themetitle: string | undefined) => {
	let crumbs = [
		{
			title: 'Home',
			path: '/',
		},
	]

	if (path.match('category')) {
		crumbs = [...crumbs, { title: title, path: path }]
	} else if (path.match('theme')) {
		crumbs = [...crumbs, { title: themetitle || '', path: path }]
	} else if (path.match('registration')) {
		crumbs = [...crumbs, { title: 'Registration', path: path }]
	} else if (path.match('user')) {
		crumbs = [...crumbs, { title: 'User', path: path }]
	}
	return crumbs
}

export default createBreadcrumbs
