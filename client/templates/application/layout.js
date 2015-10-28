Template.layout.helpers({

	pageTitle: function () {
		Session.set('pageTitle', 'Test');
		return Session.get('pageTitle');
	}
});