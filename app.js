
console.log("test")

const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
  }]



  let packageElem = document.getElementById('packages')
  function drawAllPackages() {
    console.log('drawing packages')
    let template = ''
    packages.forEach(p=> {
        template += `<div class="col-6 my-3 bg-dark text-light rowCard"><span class="text-warning">TO:</span> ${p.to}</div> <div class="col-6 my-3 bg-dark text-light rowCard"><span class="text-warning">TRACKING:</span> ${p.trackingNumber}</div>`
    })
    packageElem.innerHTML = template
  }

function reset() {
  drawAllPackages()
}

  function filterFragile() {
    let fragile = packages.filter(p => p.isFragile)
    console.log(fragile, 'Fragile');
    let template = ''
    fragile.forEach(p=> {
      template += `<div class="col-6 my-3 bg-dark text-light">TO: ${p.to}</div> <div class="col-6 my-3 bg-dark text-light">TRACKING: ${p.trackingNumber}</div>`
    })
    packageElem.innerHTML = template
  }

  function filterHeavy() {
    let heavy = packages.filter(p => {
      if(p.weight > 2) {
        return p
      }
    })
    console.log('HEAVY', heavy)
    let template = ''
    heavy.forEach(p=> {
      template += `<div class="col-6 my-3 bg-dark text-light">TO: ${p.to}</div> <div class="col-6 my-3 bg-dark text-light">TRACKING: ${p.trackingNumber}</div>`
    })
  }


  drawAllPackages()