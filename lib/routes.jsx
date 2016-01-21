function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />,
  });
}

FlowRouter.route('/', {
  name: 'Home',
  action(params) {
    renderMainLayoutWith(<Home />);
  },
});
