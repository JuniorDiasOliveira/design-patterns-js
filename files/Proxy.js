async function superImportantData(id) {
  console.log("this is a super important request");
  return Promise.resolve("Its resolved!" + id);
}

function SuperImportantDataProxy() { // <---- Proxy
  const cache = new Map();
  this.get = async (id) => {
    if (cache.has(id)) {
      return cache.get(id);
    }
    const data = await superImportantData(id);
    cache.set(id, data);
    return data;
  };
}

const result = new SuperImportantDataProxy();

/**
 * 
 * PROXY BEING TESTS BELOW 
 *
 */

const poweredSetInterval = (fn, time, amount) => { // helper function created just to simulate a request.
  let i = 0;
  const interval = setInterval(() => {
    i++;
    if (i === amount) {
      clearInterval(interval);
    }
    fn();
  }, time);
};

poweredSetInterval(() => result.get("1").then(console.log), 1000, 5);
poweredSetInterval(() => result.get("2").then(console.log), 1000, 5);
