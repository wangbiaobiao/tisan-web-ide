!function(){
  if (!window.iotboard){
    console.log("iotboard not initialized!");
    return;
  }

  var widgetName='air';
  window.iotboard.defineWidget(widgetName, {
    status: {
      mark:'-'
    },
    render: function(dataset){
        var dataset=clone(dataset);
        dataset.status=this.status;
        return template('template-'+widgetName,dataset);
    },
    listeners: [
      {
        selector: ".btn-refresh",
        event: "click",
        behavior: "get"
      }
    ],
    parseStatus: function(dom){
      return {
        mark: dom.find(".mark").val()
      }
    },
  });
}();
