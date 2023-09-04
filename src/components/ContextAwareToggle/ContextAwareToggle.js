import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useContext } from "react";
import uparrow from "./../../assets/uparrow.png";
import downarrow from "./../../assets/arrowdown.png";

export default function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className="accordTitleStyle"
    >
      <span>{children}</span>
      <img src={isCurrentEventKey ? uparrow : downarrow} alt="arrow" />
    </button>
  );
}
