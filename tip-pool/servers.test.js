describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

it("should not add a new server with an empty str", function(){
  serverNameInput = "";
  submitServerInfo();
  expect(Object.keys(allServers).length).toEqual(0);
})

it("should create table centent and update server table", function(){
  serverNameInput.value = "Alice";

  submitServerInfo();
  updateServerTable();
  let curTDList = document.querySelectorAll('#serverTable tbody tr td');

  expect(curTdList.length).toEqual(3);
  expect(curTdList[0].innerText).toEqual('Alice');
  expect(curTdList[1].innerText).toEqual('$0.00');
  expect(curTdList[2].innerText).toEqual('X');

  console.log(curTDList)
})


  afterEach(function() {
    serverNameInput.value = '';
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers ={};
  });
  
});
