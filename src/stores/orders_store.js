import alt from '../alt';
import OrdersActions from '../actions/orders_actions';

class OrdersStore {
  constructor() {
    this.orders = [];
    this.selectedStatus = 'all';
    this.amountFilter = null;

    this.bindListeners({
      handleUpdateOrders: OrdersActions.UPDATE_ORDERS,
      handleUpdateSelectedStatus: OrdersActions.UPDATE_SELECTED_STATUS,
      handleUpdateAmountFilter: OrdersActions.UPDATE_AMOUNT_FILTER,
      handleFetchOrders: OrdersActions.FETCH_ORDERS
    });
  }

  handleUpdateOrders(orders) {
    this.orders = orders;
  }

  handleUpdateAmountFilter(amount) {
    this.amountFilter = amount;
  }

  handleUpdateSelectedStatus(status) {
    this.selectedStatus = status;
  }

  handleFetchOrders() {
    this.orders = [];
  }
}

export default alt.createStore(OrdersStore);
