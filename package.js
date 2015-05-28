Package.describe({
  name: 'youiest:journal',
  version: '0.0.4',
  summary: ' for reactive network triggers with a simple ui',
  git: 'https://github.com/youiest/youiest-unionize.git',
  documentation: 'README.md'
});


// add grounddb here
Package.on_use(function (api) {
  api.versionsFrom('1.0.3.1');
  api.use([
    'templating',
    'deps',
    'tracker',
    'pedrohenriquerls:reactjs',
    'matb33:collection-hooks',
    'coffeescript',
    'mongo',
    'accounts-base',
    'session',
    ], ['client', 'server']);

  api.export(["W","WI","Unionize","Recommend"], ['client','server']);
  
  api.add_files([
    'lib.js'
  ], ['client','server']);
  
  api.add_files([
    'client.js'
  ], ['client']);

  api.add_files([
    'server.js',
    'rules.js',
    'methods.js',
    'publish.js'
  ], ['server']);

});