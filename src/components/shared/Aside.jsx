import React from 'react'

const Aside = () => {
  return (
    <aside>
      <div class="fixed">
           <div class="filters">
                <div class="filter-drop-down ">
                     <div class="header">
                          <span>Price</span><i class="icon-chevron-down"></i>
                     </div>
                     <div class="content">
                          <form class="price-filter">
                                <label><span>From</span>
                                      <input type="number" value=""/>
                                </label>
                                <label><span>To</span>
                                      <input type="number" value=""/>
                                </label>
                                <button>Filter price</button>
                          </form>
                      </div>
                </div>
                <div class="filter-drop-down ">
                     <div class="header">
                          <span>Category</span><i class="icon-chevron-down"></i>
                     </div>
                     <div class="content">
                          <ul class="category-filter">
                              <li><button>Smart TV</button></li>
                              <li><button>Computers</button></li>
                              <li><button>Smartphones</button></li>
                          </ul>
                      </div>
                </div>
          </div>
      </div>
</aside>
  )
}

export default Aside