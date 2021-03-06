function Spa() {
  return (
    <HashRouter>
      <div>
        <UserContext.Provider value={{ users: [] }}>
          <NavBar />
          <div className="d-flex justify-content-center p-5 mt-4">
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/createAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw" component={Withdraw} />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/balance" component={Balance} />
            {/* <Route path="/alldata" component={AllData} /> */}
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
