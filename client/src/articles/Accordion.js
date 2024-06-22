import { useEffect , useState } from "react";
import './accordion.css';
import { FaQuestionCircle } from "react-icons/fa";

const Accordion = ({items , keepOthersOpen})=>{
  const [accordionItems , setAccordionItems] = useState(null);

  useEffect(()=>{
    if(items){
      setAccordionItems([
        ...items.map(item =>({
          ...item,
          toggled : false
        }))
      ])
    }
  },[items])

  function handleAccordionToogle(clickedItem){
    setAccordionItems([
      ...accordionItems.map((item)=>{
        let toggled = item.toggled;
        if(clickedItem.id === item.id){
          toggled = !item.toggled;
        }else if(!keepOthersOpen){
          toggled = false;
        }
        return {
          ...item,
          toggled
        }
      })
    ])
  }

  return <>
  <h1 className="faq-word">FAQs</h1>
  <div className="accordion-parent">
    {accordionItems?.map((listItem , key)=>{
      return (
        <div className={`accordion ${listItem.toggled ? 'toggled' : ''}`} key={key}>
          <button className="toggle" onClick={()=>{
            handleAccordionToogle(listItem)
          }}>
            <p className="p">{<FaQuestionCircle className="faq-icon"/>}   {listItem.label}</p>
            <div className="direction-indicator">{listItem.toggled ? '-' : '+'}</div>
          </button>

          <div className="content-parent">
            <div className="content p">{listItem.renderContent()}</div>
          </div>

        </div>
      )
    })}
  </div>
  </>
}

export default Accordion;