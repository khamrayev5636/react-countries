
import "./form.css"

const Form = () => {
  
  return (
    <section className="hero py-5">
    <div className="container">
    <form className="form d-flex flex-column flex-md-row justify-content-md-between" method="GET">
    <input className="search__input" type="search" name="countries_search" aria-label="Countries search"  placeholder="Search for a country…"/>
    <select className="form__select" aria-label="Default select example">
    <option selected hidden>Filter by Region</option>
    <option value="1">Africa</option>
    <option value="2">America</option>
    <option value="3">Asia</option>
    <option value="3">Europe</option>
    <option value="3">Oceania</option>
    </select>
    </form>
    </div>
    </section>
    )
    
  }
  
  export default Form