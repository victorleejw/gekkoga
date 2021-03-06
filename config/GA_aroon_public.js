const randomExt = require('random-ext');

const config = {
  stratName: 'aroon_public',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'ETH',
      asset: 'ETC'
    },

    daterange: 'scan',

    // daterange: {
    //   from: '2017-12-08 06:24:00',
    //   to: '	2018-02-16 07:24:00'
    //   //to: '2017-12-05 15:04:00'
    // },

    simulationBalance: {
      'asset': 0,
      'currency': 100
    },

    slippage: 0.05,
    feeTaker: 0.25,
    feeMaker: 0.15,
    feeUsing: 'taker', // maker || taker

  },
  apiUrl: 'http://localhost:3000',

  // Population size, better reduce this for larger data
  populationAmt: 20,

  // How many completely new units will be added to the population (populationAmt * variation must be a whole number!!)
  variation: 0.5,

  // How many components maximum to mutate at once
  mutateElements: 7,

  // How many parallel queries to run at once
  parallelqueries: 8,

  // profit || score
  // score = profit * sharpe -- feedback?
  // profit = recommended!
  mainObjective: 'profit',

  // optionally recieve and archive new all time high every new all time high
  notifications: {
    email: {
      enabled: false,
      receiver: 'me@gmail.com',
      senderservice: 'gmail',
      sender: 'me@gmail.com',
      senderpass: '----',
    },
  },
  candleValues: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  // candleValues: [60, 120, 180, 240, 300, 360, 420, 480, 540],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    /*
    interval =14
    [parameters]
    optInTimePeriod = 46

    [thresholds]
    beardown = 99
    bearup = 30
    bulldown = 35
    bullup = 99

    */
    optInTimePeriod: randomExt.integer(55, 35),

    bearup: randomExt.integer(45, 15),
    beardown: randomExt.integer(100, 90),
    bulldown: randomExt.integer(45, 15),
    bullup: randomExt.integer(100, 90),


    candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]

  })
};

module.exports = config;