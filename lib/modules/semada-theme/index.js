module.exports = {
  construct: function(self, options) {
    // loads from public/js/* of this module
    self.pushAsset('script', 'bootstrap.bundle.min');
    self.pushAsset('script', 'bootstrap.min');
    // loads from public/css/* of this module
    self.pushAsset('stylesheet', 'bootstrap-grid.min');
    self.pushAsset('stylesheet', 'bootstrap-reboot.min');
    self.pushAsset('stylesheet', 'bootstrap.min');
    self.pushAsset('stylesheet', 'semada');
  }
};