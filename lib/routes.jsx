FlowRouter.route('/', {
  name: 'Home',
  action(params) {
    ReactLayout.render(Home);
  },
});

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />,
  });
}
