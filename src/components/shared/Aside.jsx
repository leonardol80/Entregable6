import React from 'react'

const Aside = () => {

const handlePrice=() => {

}

const handleSmartTv=() => {

}

const handleComputer=() => {

}

const handleSmartPhone=() => {

}


  return (
    <aside>
      <div className="fixed">
           <div className="filters">
                <div className="filter-drop-down ">
                     <div className="header">
                          <span>Price</span><i className="icon-chevron-down"></i>
                     </div>
                     <div className="content">
                          <form className="price-filter">
                                <label><span>From</span>
                                <input type="number" /> 
                                </label>
                                <label><span>To</span>
                                <input type="number" />
                                </label>
                                <button onClick={handlePrice}>Filter price</button>
                          </form>
                      </div>
                </div>
                <div className="filter-drop-down ">
                     <div className="header">
                          <span>Category</span><i className="icon-chevron-down"></i>
                     </div>
                     <div className="content">
                          <ul className="category-filter">
                              <li><button onClick={handleSmartTv}>Smart TV</button></li>
                              <li><button onClick={handleComputer}>Computers</button></li>
                              <li><button onClick={handleSmartPhone}>Smartphones</button></li>
                          </ul>
                      </div>
                </div>
          </div>
      </div>
</aside>
  )
}

export default Aside