'use strict';

navigator.getBattery().then((battery) => {
  battery.onchargingchange = () => {
    new Notification('BATTERY !!!!!');
  };
});