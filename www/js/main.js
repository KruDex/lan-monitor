document.addEventListener("DOMContentLoaded",()=>{const e=new WebSocket("ws://127.0.0.1:8080/ws");e.addEventListener("open",s=>{e.send(JSON.stringify({Commmand:"request"})),console.log("sent")}),e.addEventListener("message",e=>{console.log("got msg"),parseScanResults(JSON.parse(e.data))})});let parseScanResults=e=>{let s={scanArg:"Scan arg: "+e.nmaprun["-args"]+" "+e.nmaprun["-startstr"],hosts:e.nmaprun.host.reduce((e,s)=>(e[s.address["-addr"]]=s,e),{})};trackResults(s)},trackResults=e=>{let s,t=e;if(null!==localStorage.getItem("scanResults")){for(key of(s=JSON.parse(localStorage.getItem("scanResults")),Object.keys(s.hosts))){void 0===t.hosts[key]&&(s.hosts[key].status["-state"]="down"),console.log(key);let e=document.createElement("li"),a=document.createTextNode(key);e.appendChild(a)}for(key of Object.keys(t.hosts))void 0!==s.hosts[key]&&"down"!==s.hosts[key].status["-state"]||(s.hosts[key]=t.hosts[key]);localStorage.setItem("scanResults",JSON.stringify(s))}else localStorage.setItem("scanResults",JSON.stringify(e))},loadScanResults=e=>{};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic29ja2V0IiwiV2ViU29ja2V0IiwiZXZlbnQiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsIkNvbW1tYW5kIiwiY29uc29sZSIsImxvZyIsInBhcnNlU2NhblJlc3VsdHMiLCJwYXJzZSIsImRhdGEiLCJzY2FuUmVzdWx0cyIsInNjYW5BcmciLCJubWFwcnVuIiwiaG9zdHMiLCJob3N0IiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImFkZHJlc3MiLCJ0cmFja1Jlc3VsdHMiLCJsb2NhbFJlc3VsdHMiLCJuZXdSZXN1bHRzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImtleSIsIk9iamVjdCIsImtleXMiLCJ1bmRlZmluZWQiLCJzdGF0dXMiLCJuYW1lTm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lVGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwic2V0SXRlbSIsImxvYWRTY2FuUmVzdWx0cyJdLCJtYXBwaW5ncyI6IkFBQUFBLFNBQVNDLGlCQUFpQixtQkFBb0IsS0FJMUMsTUFBTUMsRUFBUyxJQUFJQyxVQUFVLDBCQUc3QkQsRUFBT0QsaUJBQWlCLE9BQVFHLElBQzVCRixFQUFPRyxLQUFLQyxLQUFLQyxVQUFVLENBQUVDLFNBQVUsYUFDdkNDLFFBQVFDLElBQUksVUFJaEJSLEVBQU9ELGlCQUFpQixVQUFXRyxJQUMvQkssUUFBUUMsSUFBSSxXQUNaQyxpQkFBaUJMLEtBQUtNLE1BQU1SLEVBQU1TLFdBSzFDLElBQUlGLGlCQUFtQkUsSUFDbkIsSUFBSUMsRUFBYyxDQUNkQyxRQUFTLGFBQWVGLEVBQUtHLFFBQVEsU0FBVyxJQUFNSCxFQUFLRyxRQUFRLGFBQ25FQyxNQUFPSixFQUFLRyxRQUFRRSxLQUFLQyxPQUFPLENBQUNDLEVBQUtDLEtBQ2xDRCxFQUFJQyxFQUFLQyxRQUFRLFVBQVlELEVBQ3RCRCxHQUNSLEtBRVBHLGFBQWFULElBSWJTLGFBQWVWLElBQ2YsSUFBSVcsRUFDQUMsRUFBYVosRUFFakIsR0FBNEMsT0FBeENhLGFBQWFDLFFBQVEsZUFBekIsQ0FRQSxJQUFLQyxPQUhESixFQUFlbEIsS0FBS00sTUFBTWMsYUFBYUMsUUFBUSxnQkFHdkNFLE9BQU9DLEtBQUtOLEVBQWFQLFFBQVEsTUFDWGMsSUFBMUJOLEVBQVdSLE1BQU1XLE9BQW9CSixFQUFhUCxNQUFNVyxLQUFLSSxPQUFPLFVBQVksUUFDcEZ2QixRQUFRQyxJQUFJa0IsS0FDWixJQUFJSyxFQUFXakMsU0FBU2tDLGNBQWMsTUFDbENDLEVBQWVuQyxTQUFTb0MsZUFBZVIsS0FHM0NLLEVBQVNJLFlBQVlGLEdBSXpCLElBQUtQLE9BQU9DLE9BQU9DLEtBQUtMLEVBQVdSLFlBQ0NjLElBQTVCUCxFQUFhUCxNQUFNVyxNQUFtRSxTQUE3Q0osRUFBYVAsTUFBTVcsS0FBS0ksT0FBTyxZQUN4RVIsRUFBYVAsTUFBTVcsS0FBT0gsRUFBV1IsTUFBTVcsTUFHbkRGLGFBQWFZLFFBQVEsY0FBZWhDLEtBQUtDLFVBQVVpQixTQXZCL0NFLGFBQWFZLFFBQVEsY0FBZWhDLEtBQUtDLFVBQVVNLEtBNkJ2RDBCLGdCQUFrQjFCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gQ3JlYXRlIFdlYlNvY2tldCBjb25uZWN0aW9uLlxuICAgIC8vbGV0IHdzdXJsID0gbG9jYXRpb24uaG9zdFxuICAgIGxldCB3c3VybCA9IFwiMTI3LjAuMC4xOjgwODBcIlxuICAgIGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vJyArIHdzdXJsICsgJy93cycpO1xuXG4gICAgLy8gQ29ubmVjdGlvbiBvcGVuZWRcbiAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIGV2ZW50ID0+IHtcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBDb21tbWFuZDogJ3JlcXVlc3QnIH0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbnQnKTtcbiAgICB9KTtcblxuICAgIC8vIExpc3RlbiBmb3IgbWVzc2FnZXNcbiAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dvdCBtc2cnKTtcbiAgICAgICAgcGFyc2VTY2FuUmVzdWx0cyhKU09OLnBhcnNlKGV2ZW50LmRhdGEpKTtcbiAgICB9KTtcbn0pO1xuXG4vLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIElwIGFkZHJlc3NlcyBhcyBrZXlzXG5sZXQgcGFyc2VTY2FuUmVzdWx0cyA9IGRhdGEgPT4ge1xuICAgIGxldCBzY2FuUmVzdWx0cyA9IHtcbiAgICAgICAgc2NhbkFyZzogJ1NjYW4gYXJnOiAnICsgZGF0YS5ubWFwcnVuWyctYXJncyddICsgJyAnICsgZGF0YS5ubWFwcnVuWyctc3RhcnRzdHInXSxcbiAgICAgICAgaG9zdHM6IGRhdGEubm1hcHJ1bi5ob3N0LnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBvYmpbaXRlbS5hZGRyZXNzWyctYWRkciddXSA9IGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSlcbiAgICB9O1xuICAgIHRyYWNrUmVzdWx0cyhzY2FuUmVzdWx0cyk7XG59O1xuXG4vLyBrZWVwcyB0aGUgbG9jYWwgc2NhbiByZXN1bHRzIHVwZGF0ZWQgYW5kIHVwZGF0ZXMgaG9zdHMgdGhhdCBhcmUgb2ZmbGluZVxubGV0IHRyYWNrUmVzdWx0cyA9IGRhdGEgPT4ge1xuICAgIGxldCBsb2NhbFJlc3VsdHMsXG4gICAgICAgIG5ld1Jlc3VsdHMgPSBkYXRhO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY2FuUmVzdWx0cycpID09PSBudWxsKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY2FuUmVzdWx0cycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgLy8gdXBkYXRlIHZpZXdcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsUmVzdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NjYW5SZXN1bHRzJykpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IG9mIE9iamVjdC5rZXlzKGxvY2FsUmVzdWx0cy5ob3N0cykpIHtcbiAgICAgICAgaWYgKG5ld1Jlc3VsdHMuaG9zdHNba2V5XSA9PT0gdW5kZWZpbmVkKSBsb2NhbFJlc3VsdHMuaG9zdHNba2V5XS5zdGF0dXNbJy1zdGF0ZSddID0gJ2Rvd24nO1xuICAgICAgICBjb25zb2xlLmxvZyhrZXkpXG4gICAgICAgIGxldCBuYW1lTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBsZXQgbmFtZVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoa2V5KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIG5hbWVOb2RlLmFwcGVuZENoaWxkKG5hbWVUZXh0Tm9kZSlcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYW4tcmVzdWx0c1wiKS5hcHBlbmRDaGlsZChuYW1lTm9kZSlcbiAgICB9XG5cbiAgICBmb3IgKGtleSBvZiBPYmplY3Qua2V5cyhuZXdSZXN1bHRzLmhvc3RzKSkge1xuICAgICAgICBpZiAobG9jYWxSZXN1bHRzLmhvc3RzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBsb2NhbFJlc3VsdHMuaG9zdHNba2V5XS5zdGF0dXNbJy1zdGF0ZSddID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIGxvY2FsUmVzdWx0cy5ob3N0c1trZXldID0gbmV3UmVzdWx0cy5ob3N0c1trZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY2FuUmVzdWx0cycsIEpTT04uc3RyaW5naWZ5KGxvY2FsUmVzdWx0cykpO1xuICAgIC8vIHVwZGF0ZSB2aWV3ICAgXG5cbn07XG5cblxubGV0IGxvYWRTY2FuUmVzdWx0cyA9IGRhdGEgPT4ge1xuICAgIC8vIGxvYWQgcmVzdWx0cyB0byB2aWV3XG59O1xuIl19
