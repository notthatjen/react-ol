import HandPointDown from "./handpointdown.png"
import ManHandUp from "./manhandup.png"
import Default from './default.png'
import Airplane from './airplane.png'
import Briefcase from './briefcase.png'
import Building from './building.png'
import Bus from './bus.png'
import Car from './car.png'
import Cash from './cash.png'
import Church from './church.png'
import Cigarette from './cigarette.png'
import Cloud from './cloud.png'
import Construction from './construction.png'
import Crossmark from './crossmark.png'
import Hospital from './hospital.png'
import Hotel from './hotel.png'
import House from './house.png'
import MoneyBag from './moneybag.png'
import NoMobilePhone from './nomobilephone.png'
import NoSmoking from './nosmoking.png'
import NoUnderAge from './nounderage.png'
import Pedestrian from './pedestrian.png'
import PoliceCar from './policecar.png'
import Rain from './rain.png'
import Sun from './sun.png'
import SunCloud from './suncloud.png'
import Taxi from './taxi.png'
import Toilet from './toilet.png'
import TrafficLight from './trafficlight.png'
import OfficeMan from './officeman.png'
import OfficeWoman from './officewoman.png'


const getIcon = (name) => {
  switch (name) {
    case "ManHandUp":
      return ManHandUp;
    case "HandPointDown":
      return HandPointDown;
    case "Airplane":
      return Airplane;
    case "Briefcase":
      return Briefcase;
    case "Building":
      return Building;
    case "Bus":
      return Bus;
    case "Car":
      return Car;
    case "Cash":
      return Cash;
    case "Church":
      return Church;
    case "Cigarette":
      return Cigarette;
    case "Cloud":
      return Cloud;
    case "Construction":
      return Construction;
    case "Crossmark":
      return Crossmark;
    case "Hospital":
      return Hospital;
    case "Hotel":
      return Hotel;
    case "House":
      return House;
    case "MoneyBag":
      return MoneyBag;
    case "NoMobilePhone":
      return NoMobilePhone;
    case "NoSmoking":
      return NoSmoking;
    case "NoUnderAge":
      return NoUnderAge;
    case "Pedestrian":
      return Pedestrian;
    case "PoliceCar":
      return PoliceCar;
    case "Rain":
      return Rain;
    case "Sun":
      return Sun;
    case "SunCloud":
      return SunCloud;
    case "Taxi":
      return Taxi;
    case "Toilet":
      return Toilet;
    case "TrafficLight":
      return TrafficLight;
    case "OfficeMan":
      return OfficeMan;
    case "OfficeWoman":
      return OfficeWoman;
    default:
      return Default;
  }
}

export {
  getIcon
}