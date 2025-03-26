import mockjs from "mockjs";


const mock = {
    getOrder(type) {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i++) {
                array.push(mockjs.mock({
                    'name': type=0 ? 'normal order' : 'vip order'+ i,
                    'price': mockjs.Random.integer(20, 1000) + '$',
                    'buyer': mockjs.Random.cname(),
                    'time': mockjs.Random.datetime('yyyy-MM-dd HH:mm:ss'),
                    'role': mockjs.Random.boolean,
                    'state': mockjs.Random.boolean,
                    'payType': mockjs.Random.boolean,
                    'source':mockjs.Random.url(),
                    'phone': mockjs.mock(/^1[385][1-9]\d{8}/),
                }));
            }
            return array;  
        }
    }

export default mock;