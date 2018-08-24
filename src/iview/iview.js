
import {
    // Affix,
    // Alert,
    // Anchor,
    // AnchorLink,
    // AutoComplete,
    Avatar,
    // BackTop,
    // Badge,
    // ButtonGroup,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    // Carousel,
    // CarouselItem,
    Checkbox,
    Cell,
    CellGroup,
    // CheckboxGroup,
    // Collapse,
    // ColorPicker,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    // DatePicker,
    // Divider,
    FormItem,
    Icon,
    // InputNumber,
    // Scroll,
    Layout,
    Row,
    Sider,
    MenuItem,
    Split,
    // Submenu
    // MenuGroup
    // OptionGroup
    Page,
    // Panel
    Poptip,
    // Radio
    // RadioGroup
    // Rate
    // Slider
    // Step
    // Steps
    Tabs,
    TabPane,
    Tag,
    Tooltip,
    Transfer,
    // Timeline
    // TimelineItem
    // TimePicker
    // Tooltip
    // Tree
    // Upload
  
    Button,
    Circle,
    Col,
    Content,
    Form,
    Footer,
    Header,
    Input,
    Menu,
    Option,
    Progress,
    Select,
    Switch,
    Table,
    Time,
  
    LoadingBar,
    Message,
    Modal,
    Notice,
    Spin
  
    // locale,
    // i18n
  } from 'iview';
  const iview = {
    install: function (Vue) {
      Vue.prototype.$IVIEW = {
        size: '',
        transfer: ''
      };
      Vue.component('Avatar', Avatar);
      Vue.component('Breadcrumb', Breadcrumb);
      Vue.component('BreadcrumbItem', BreadcrumbItem);
      Vue.component('Card', Card);
      Vue.component('Cell', Cell);
      Vue.component('CellGroup', CellGroup);
      Vue.component('Dropdown', Dropdown);
      Vue.component('DropdownItem', DropdownItem);
      Vue.component('DropdownMenu', DropdownMenu);
      Vue.component('FormItem', FormItem);
      Vue.component('Icon', Icon);
      Vue.component('Layout', Layout);
      Vue.prototype.$Loading = LoadingBar;
      Vue.prototype.$Message = Message;
      Vue.prototype.$Modal = Modal;
      Vue.prototype.$Notice = Notice;
      Vue.prototype.$Spin = Spin;
      // Vue.prototype.$locale = locale;
      // Vue.prototype.$i18n = i18n;
      Vue.component('Row', Row);
      Vue.component('Sider', Sider);
      Vue.component('Tag', Tag);
      Vue.component('Tooltip', Tooltip);
      Vue.component('Poptip', Poptip);
      Vue.component('Transfer', Transfer);
      Vue.component('MenuItem', MenuItem);
      Vue.component('Modal', Modal);
      Vue.component('Button', Button);
      Vue.component('i-circle', Circle);
      Vue.component('Col', Col);
      Vue.component('Content', Content);
      Vue.component('Form', Form);
      Vue.component('Footer', Footer);
      Vue.component('Header', Header);
      Vue.component('Input', Input);
      Vue.component('Menu', Menu);
      Vue.component('Option', Option);
      Vue.component('Progress', Progress);
      Vue.component('Select', Select);
      Vue.component('i-switch', Switch);
      Vue.component('Table', Table);
      Vue.component('Time', Time);
      Vue.component('Tabs', Tabs);  
      Vue.component('TabPane', TabPane);  
      Vue.component('Split', Split);   
      Vue.component('Checkbox', Checkbox);     
      Vue.component('Page', Page);                         
    }
  };
  
  export default iview;
  