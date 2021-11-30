const Nav = () => {
  return (
    <>
      <nav id="navbar-example3" class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#item-1">
            Overview
          </a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ml-3 my-1" href="#item-1-1">
              Why we love this trip?
            </a>
            <a class="nav-link ml-3 my-1" href="#item-1-2">
              Itinrary day-by-day
            </a>
          </nav>
          <a class="nav-link" href="#item-2">
            What's included?
          </a>
          <a class="nav-link" href="#item-3">
            what's not included?
          </a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ml-3 my-1" href="#item-3-1">
              Map
            </a>
            <a class="nav-link ml-3 my-1" href="#item-3-2">
              Gallery
            </a>
          </nav>
        </nav>
      </nav>
      <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
        <h4 id="item-1">Overview</h4>
        <p>...</p>
        <h5 id="item-1-1">Why we love this trip?</h5>
        <p>...</p>
        <h5 id="item-1-2">Itinrary day-by-day</h5>
        <p>...</p>
        <h4 id="item-2">What's included?</h4>
        <p>...</p>
        <h4 id="item-3">what's not included?</h4>
        <p>...</p>
        <h5 id="item-3-1">Map</h5>
        <p>...</p>
        <h5 id="item-3-2">Galery</h5>
        <p>...</p>
      </div>
    </>
  );
};
