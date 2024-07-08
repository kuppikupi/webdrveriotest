import { $ } from '@wdio/globals';
import Page from './page.js';

class alert extends Page {
    public get alertLink()
    {
        return $("#content  ul li:nth-child(7) a");
    }


    public get box()
    {
        return $("#hot-spot");
    }


  public open() {
    return super.open();
  }
}

export default new alert();
