#!/usr/bin/env node

function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms))}

var cp=require('child_process')
async function init() {
  var [cmd,...args]=process.argv.slice(2)
  console.log({cmd,args})
  var p=exec(cmd,args)
  while(true) {
    var str=await execPromise('git pull')
    console.log({str})
    if(!str.match(/Already up to/)) {
      console.log('Need to update, killing...')
      p.kill()
      console.log('Retarting...')
      p=exec(cmd,args)
    }
    try {
    }
    catch(err){
      console.log(err)
      await delay(5000)
    }
    await delay(5000)
  }
}
function execPromise(cmd) {
  return new Promise(resolve=>{
    var x=cp.exec(cmd)
    var str=''
    //@ts-ignore
    x.stdout.on("data",data=>{
      str+=data.toString()
    })
    //@ts-ignore
    x.stderr.on("data", data=>{
      str+=data.toString()
    })
    x.on('exit',()=>{
      resolve(str)
    })
  })
}
function exec(cmd,args){
  return cp.spawn(cmd,args,{stdio:'inherit'})
}
init()