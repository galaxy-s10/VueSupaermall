import request from 'api/request'

export function getDetailData(iid) {
    return request({
        url: '/detail',
        method: 'get',
        params: {
            iid
        }
    })
}

export function getCommend() {
    return request({
      url:'/recommend'
    })
  }

export class goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.nowPrice = itemInfo.highNowPrice;
    }
}

export class shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sell = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
        this.url = shopInfo.shopUrl;
    }
}
export class goodsParams {
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : '';
        this.set = info.set
        this.desc = rule.desc
        this.disclaimer = rule.disclaimer
        this.tables = rule.tables[0]/*~~~*/
    }
}