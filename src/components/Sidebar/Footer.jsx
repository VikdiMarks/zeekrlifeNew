function Footer() {
  const arrowTop =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAZCAYAAABOxhwiAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI+SURBVHgB7Za/T9tAFMff2V46NT9IUrWLpTqqbTJkbLd0o1uztX8F7tYNunWDrerYrVvE1k6lWzcyFGMJt/KIiAlmQDAQjnchQgTis/3sMCA+U5J7Pn3vcu9zBnjgHmGYrRXDtldgDqgwB3RdL1WfPvvCABwA1qk06qXhYPATCoRBweimqWtM7eHH9o2h/hkfdQPPC6AACg0uQqtM/YWT6rPGOUAw4qPXRYRXoCAM0+xoirYVF1ogxsTCmk27DTkpJHjTai0DBgLOS0m1IjzX2JZhWQ7kIHdzCnMA458hM2ypUq8BNu1vIEAOPm0OKnTjkJpTYo6bfIBzEAdyLaEus3EyB08yx+WsLMLAXd/7uym+Nm27fc5ZT/ZMVuNkCi7MAYrWkzVhXIA0CxbPKme8u7vr9iGB1FZJaY5+3K6J38SYqIl7OItxUjVnGnPgbn0bnRy/D3x/L64mCsNoGA6+lmuNMoZ8GT9bsnGkwVObg/FP/3ZcJ4qiU0jBYbj/o7LQYLjFHcmkUuPEnvEs5vB3tteBgPFi0aEaZ2ZwijmoUI1zK3gec1ChGGfKKnnNQYVinKsdn5hjFSRMzOEEQRDBnHhutdYZ8GVpEeYcW8WwFtdwCR8TijOZg0pa44yDl2tPHuEq30nmQ3O4hDdAGsNwf7NSrR9h+KW4mnFwXKU3s1CYg7M3vrf9He6Y4cHgT7Ve2+B4GeF5nu45/PfV64XXb7SJOV7995LfG+YFXj57jxeqG4wpb6/CY2jfdVcvALhKPKnFSZYpAAAAAElFTkSuQmCC";

  return (
    <div className="sidebar__editor--footer">
      <div className="sidebar__editor--footer__price">
        <span>349,000р</span>
        <button>
          <img src={arrowTop} alt="" />
        </button>
      </div>
      <button>
        <span>Далее ></span>
      </button>
    </div>
  );
}

export default Footer;
