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
      default:
        return (
          <>
            <h1>No Page 404.</h1>
          </>  
        );
    }
}

export default Body;
