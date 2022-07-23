function Body({ title }) {
    //Create Variables and hadnle data
    switch(title) {
      case 'Home':
        return (
          <>
            <h1>Home Area loaded.</h1>
          </>  
        );
      case 'Checkout':
          return (
            <>
              <h1>Checkout.</h1>
            </>  
          );
        case 'Transaction':
          return (
            <>
              <h1>Transaction.</h1>
            </>  
          );
        case 'LawyAway':
          return (
            <>
              <h1>LawyAway.</h1>
            </>  
          );
        case 'PullList':
          return (
            <>
              <h1>PullList.</h1>
            </>  
          );
        case 'MarketPlace':
          return (
            <>
              <h1>MarketPlace.</h1>
            </>  
          );
        case 'Till':
          return (
            <>
              <h1>Till.</h1>
            </>  
          );
        case 'Reports':
          return (
            <>
              <h1>Reports.</h1>
            </>  
          );
        case 'Search':
          return (
            <>
              <h1>Search.</h1>
            </>  
          );
      default:
        return (
          <>
            <h1>No Page 404.</h1>
          </>  
        );
    }
}

export default Body;
