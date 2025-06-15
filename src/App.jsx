/** Component Imports */
import ArticlePreview from './components/ArticlePreview';


/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles' 
 */

const App = () => {
  return (
    <div>
      {<ArticlePreview /> /** You can remove this when you wish, it's provided as an example of modular styling */}
      
      {/* Shift the overall look and feel by adding these wonderful 
      touches to furniture in your home

      Ever been in a room and felt like something was missing? Perhaps 
      it felt slightly bare and uninviting. I’ve got some simple tips 
      to help you make any room feel complete.

      Michelle Appleton
      28 Jun 2020

      Share */}
    </div>
  )
}

export default App