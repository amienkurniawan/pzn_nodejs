function samplePromise() {

  return Promise.resolve("Eko");
}

async function getName() {

  const name = await samplePromise();
  console.info(name)
}

getName();
