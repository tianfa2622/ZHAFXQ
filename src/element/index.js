import Vue from "vue";
import {
  Tree,
  Collapse,
  CollapseItem,
  MessageBox,
  Message,
  Button,
  Select,
  Row,
  Col,
  Container,
  Header,
  Main,
  Table,
  TableColumn,
  Avatar,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Link,
  Card,
  Tabs,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Input,
  Pagination,
  Radio,
  Option,
  OptionGroup,
  DatePicker,
  InputNumber,
  TimePicker,
  divider,
  CheckboxGroup,
  Checkbox,
  Image,
  Popover,
  Dialog
} from "element-ui";

Vue.use(Tree);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Dialog);
Vue.use(Image);
Vue.use(Popover);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(divider);
Vue.use(InputNumber);
Vue.use(TimePicker);
Vue.use(DatePicker);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Radio);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Card);
Vue.use(Link);
Vue.use(Submenu);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Avatar);
Vue.use(Button);
Vue.use(Select);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
