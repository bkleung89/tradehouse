import React from 'react';
import SidebarSearch from '../sidebar/SidebarSearch.jsx';
import SidebarCustomerDashboard from '../sidebar/SidebarCustomerDashboard.jsx';

class CustomerSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftTab: true,
    };
    this.handleLeftTabClick = this.handleLeftTabClick.bind(this);
    this.handleRightTabClick = this.handleRightTabClick.bind(this);
  }

  handleLeftTabClick() {
    this.setState({ leftTab: true });
  }

  handleRightTabClick() {
    this.setState({ leftTab: false });
  }

  render() {
    return (
      <div className="CustomerSidebar">
        <div className="tabs">
          <h3 className="leftTab" onClick={this.handleLeftTabClick}>Dashboard</h3>
          <h3 className="rightTab" onClick={this.handleRightTabClick}>Search</h3>
        </div>
        {
          this.state.leftTab ? <SidebarCustomerDashboard /> : <SidebarSearch />
        }
      </div>
    );
  }
}

export default CustomerSidebar;
