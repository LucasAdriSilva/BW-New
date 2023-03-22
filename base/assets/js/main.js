


const exercises = [
  { name: "Knee Push Ups (de joelho)", url: "https://cdn.w600.comps.canstockphoto.com.br/trabalhando-dela-joelho-femininas-vetor-clip-arte_csp89802369.jpg", category: "Push", nivel: 0, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal", required:"" },
  { name: "Flexão Padrão", url: "https://aprovataf.com.br/wp-content/uploads/2016/04/Flex%C3%A3o-de-bra%C3%A7o-no-solo-AprovaTAF.jpg", category: "Push", nivel: 1, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal", default: true, required:"" },
  { name: "Diamond Push Ups", url: "https://weighttraining.guide/wp-content/uploads/2017/07/diamond-push-up-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Push", nivel: 2, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal", required:"" },
  { name: "Archer Push Ups ", url: "https://images.squarespace-cdn.com/content/v1/5db20c73f80047725e83b73c/1605191028463-69TG5D2LHACZDGBUSVOX/service_1589888550_3778.jpg", category: "Push", nivel: 3, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal", required:"" },
  { name: "Rings Push Ups", url: "https://www.fitstream.com/images/ring-training/exercises/ring-push-up.png?w=80&h=80", category: "Push", nivel: 4, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal", required:"argolas" },
  { name: "One Arm Push Ups Elevada", url: "https://static.strengthlevel.com/images/illustrations/one-arm-push-ups-1000x1000.jpg", category: "Push", nivel: 5, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal", required:"" },
  { name: "One Arm Push Ups/Tuck Planche", url: "https://post.healthline.com/wp-content/uploads/2019/07/Man-Exercising-1200x628-facebook.jpg", category: "Push", nivel: 6, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal", required:"" },
  { name: "Bench Dips (Dips no banco)", url: "https://media.istockphoto.com/id/1277965681/pt/vetorial/bench-triceps-dips-female-exercise-guide-colorful-illustration.jpg?s=170667a&w=0&k=20&c=rys1gAWR29rv2zQL21jzAxKAmUhOaobuUjYkKQkOqj8=", category: "Push", nivel: 0, type: "Vertical", division: 'Dips - Vertical', required:"" },
  { name: "Dips com ajuda ou elastico", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dips.png/330px-Dips.png", category: "Push", nivel: 1, type: "Vertical", division: 'Dips - Vertical', required:['paralelas', 'superband'] },
  { name: "Dips negativo", url: "https://julienquaglierini.com/wp-content/uploads/2018/08/dips-768x432.jpg.webp", category: "Push", nivel: 1, type: "Vertical", division: 'Dips - Vertical', required:"paralelas" },
  { name: "Dips na paralela", url: "https://static.netshoes.com.br/produtos/barra-paralela-dip-de-parede-calistenia-(parafusos-e-buchas-plasticas)/06/06O-0003-006/06O-0003-006_zoom3.jpg?ts=1601643646", category: "Push", nivel: 2, type: "Vertical", division: 'Dips - Vertical', default: true, required:"paralelas" },
  { name: "Dips na paralela", url: "https://static.netshoes.com.br/produtos/barra-paralela-dip-de-parede-calistenia-(parafusos-e-buchas-plasticas)/06/06O-0003-006/06O-0003-006_zoom3.jpg?ts=1601643646", category: "Push", nivel: 3, type: "Vertical", division: 'Dips - Vertical', default: true, required:"paralelas" },
  { name: "Dips em L-sit", url: "https://www.shutterstock.com/image-vector/male-athlete-silhouette-doing-calisthenics-600w-1348704965.jpg", category: "Push", nivel: 4, type: "Vertical", division: 'Dips - Vertical', required:['paralelas','argolas'] },
  { name: "Dips a 45º (inclinado para frente)", url: "../img/Dips45ºpng.png", category: "Push", nivel: 4, type: "Vertical", division: 'Dips - Vertical', required:"paralelas" },
  { name: "Tuck Planche Push Ups", url: "https://qph.cf2.quoracdn.net/main-qimg-1782c86f06ca832b93dc8ae85ed637ae", category: "Push", nivel: 6, type: "Vertical", division: 'Dips - Vertical', required:"" },
  { name: "Rings Suppor Hold ", url: "https://bodydojo.com/wp-content/uploads/2018/06/RTO-support-400x300.jpg", category: "Push", nivel: 1, type: "Vertical", division: "Dips na Argola - Vertical", required:"argolas" },
  { name: "Rings Suppor Hold Supinado", url: "https://s3.amazonaws.com/prod.skimble/assets/832102/image_iphone.jpg", category: "Push", nivel: 2, type: "Vertical", division: "Dips na Argola - Vertical", required:"argolas" },
  { name: "Ring Dips Negativo", url: "https://img.myloview.com.br/fotomurais/woman-doing-gymnastic-ring-dips-exercise-flat-vector-illustration-isolated-on-white-background-700-277885449.jpg", category: "Push", nivel: 3, type: "Vertical", division: "Dips na Argola - Vertical", required:"argolas" },
  { name: "Ring Dips", url: "https://previews.123rf.com/images/lioputra/lioputra2011/lioputra201100076/158973747-gymnastic-ring-dips-exercise-flat-vector-illustration-isolated-on-white-background-workout.jpg", category: "Push", nivel: 4, type: "Vertical", division: "Dips na Argola - Vertical", required:"argolas" },
  { name: "Dips em L-sit/Buldarian Dips", url: "https://cdn.vectorstock.com/i/1000x1000/05/62/man-doing-chair-bench-tricep-dips-exercise-vector-42870562.webp", category: "Push", nivel: 5, type: "Vertical", division: "Dips na Argola - Vertical", required:"" },
  { name: "Ring Dips Supinado", url: "https://www.shutterstock.com/image-vector/sporty-man-doing-ring-dips-600w-1360756589.jpg", category: "Push", nivel: 6, type: "Vertical", division: "Dips na Argola - Vertical", required:"argolas" },
  { name: "Dips com ajuda", url: "https://thumbs.dreamstime.com/z/ilustra%C3%A7%C3%A3o-de-vetor-for%C3%A7a-exerc%C3%ADcio-barra-dip-do-varejo-com-fundo-branco-vetorial-215590449.jpg", category: "Push", nivel: 1, type: "Vertical", division: "Weigthed Dips - Vertical", required:" paralelas" },
  { name: "Dips na paralela", url: "https://static.netshoes.com.br/produtos/barra-paralela-dip-de-parede-calistenia-(parafusos-e-buchas-plasticas)/06/06O-0003-006/06O-0003-006_zoom3.jpg?ts=1601643646", category: "Push", nivel: 3, type: "Vertical", division: "Weigthed Dips - Vertical", required:"paralelas" },
  { name: "Dips + 20% do seu peso", url: "https://ginasiovirtual.com/wp-content/uploads/2021/06/fundos-com-peso.jpg", category: "Push", nivel: 4, type: "Vertical", division: "Weigthed Dips - Vertical", required:"paralelas" },
  { name: "Dips + 38% do seu peso", url: "https://ginasiovirtual.com/wp-content/uploads/2021/06/fundos-com-peso.jpg", category: "Push", nivel: 5, type: "Vertical", division: "Weigthed Dips - Vertical", required:"paralelas" },
  { name: "Dips + 55% do seu peso ", url: "https://ginasiovirtual.com/wp-content/uploads/2021/06/fundos-com-peso.jpg", category: "Push", nivel: 6, type: "Vertical", division: "Weigthed Dips - Vertical", required:"paralelas" },
  { name: "Pike Push Ups", url: "https://qph.cf2.quoracdn.net/main-qimg-47c44c047bbb8118ed02ff236da07841-lq", category: "Push", nivel: 1, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical", required:"" },
  { name: "Elevated Pike PU", url: "https://b1494239.smushcdn.com/1494239/wp-content/uploads/2013/12/pike-push-up-advanced-e1438882945766.jpg?lossy=0&strip=1&webp=1", category: "Push", nivel: 2, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical", required:"" },
  { name: "HSPU Negativo com kick | sem kick", url: "https://www.getpersonalgrowth.com/images/posts/8a57dd56ac409541f34d096ff1f903f4-0.jpg", category: "Push", nivel: 3, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical", required:"" },
  { name: "Wall HSPU (Handstand Push Ups)", url: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt2c3e741ea4156df4/5dee7c59d03adf37d49cc286/Florian_HSPU_ES_HEAD.jpg?format=pjpg&auto=webp&quality=76&width=716", category: "Push", nivel: 4, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical", required:"" },
  { name: "Wall HSPU c/ Paralela de frente | de costas", url: "https://elemento.ag/blog/wp-content/uploads/2022/02/image6.jpg", category: "Push", nivel: 5, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical", required:"" },
  { name: "HSPU Livre", url: "https://http2.mlstatic.com/D_NQ_NP_2X_813656-MLB46427391074_062021-F.webp", category: "Push", nivel: 6, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical", required:"" },

  { name: "Negativas de Remada", url: "https://treinomestre.com.br/wp-content/uploads/2021/11/remada-articulada.jpg", category: "Pull", nivel: 1, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal", required: ['argolas', 'paralelas', 'barraFixa', 'trx'] },
  { name: "Rows/Barra Australiana", url: "https://www.sport.es/labolsadelcorredor/wp-content/uploads/2018/05/Australian-pull-up.jpg", category: "Pull", nivel: 2, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal", default: true, required: ['argolas', 'paralelas', 'barraFixa', 'trx'] },
  { name: "Wide Rows (pegada aberta)", url: "https://www.spotebi.com/wp-content/uploads/2015/04/wide-row-exercise-illustration.jpg", category: "Pull", nivel: 3, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal", required: ['argolas', 'paralelas', 'barraFixa', 'trx'] },
  { name: "Archer Rows Braços Dobrados ou Alta", url: "https://cdn.vectorstock.com/i/1000x1000/36/80/woman-doing-upper-back-exercise-archer-with-long-r-vector-43113680.webp", category: "Pull", nivel: 4, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal", required:"" },
  { name: "Archer Rows (braço esticado)/Tuck Front Lever", url: "https://cdn.vectorstock.com/i/1000x1000/36/80/woman-doing-upper-back-exercise-archer-with-long-r-vector-43113680.webp", category: "Pull", nivel: 5, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal", required: ['argolas', 'paralelas', 'barraFixa', 'trx'] },
  { name: "Straddle One Arm Rows", url: "https://www.shutterstock.com/image-vector/man-doing-single-arm-bent-600w-2101536073.jpg", category: "Pull", nivel: 6, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal", required:['argolas', 'paralelas', 'barraFixa', 'trx'] },
  { name: "Pull Ups com ajuda ou elastico", url: "https://network.grupoabril.com.br/wp-content/uploads/sites/2/2017/01/xxxx.jpg?quality=85&strip=all&w=1024", category: "Pull", nivel: 0, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical", required: ['barraFixa', 'superband'] },
  { name: "Pull Ups negativo", url: "https://www.fitstream.com/images/bodyweight-training/bodyweight-exercises/negative-pull-up-main.png", category: "Pull", nivel: 2, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical", required:"barraFixa" },
  { name: "Pull Ups", url: "http://2.bp.blogspot.com/-kKolopOtBl8/UDvUdp8cDTI/AAAAAAAABw8/KwV1AzFxPsE/s400/FITNESS_proradicalskate.jpg", category: "Pull", nivel: 3, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical", default: true, required:"barraFixa" },
  { name: "Pull Ups em L-sit", url: "https://i.pinimg.com/564x/f3/b2/eb/f3b2eb20fc9472333072dab45e4140a6.jpg", category: "Pull", nivel: 4, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical", required:"barraFixa" },
  { name: "Wide Pull Ups (pegada aberta)", url: "https://images.squarespace-cdn.com/content/v1/57efdb4cd482e918dc2a900f/1658358689971-JZXGL3SS7MY5ES2S9VVT/extra+wide+pull+up+grip.JPG?format=500w", category: "Pull", nivel: 5, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical", required:"barraFixa" },
  { name: "Wide Pull Ups em L-sit", url: "https://www.fitliferegime.com/wp-content/uploads/2023/01/Muscle-Worked-During-Pull-Ups-1024x683.webp?ezimgfmt=ng:webp/ngcb1", category: "Pull", nivel: 6, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical", required:"barraFixa" },
  { name: "Archer Pull ups", url: "https://kengurupro.eu/wp-content/uploads/2020/10/k-005-1-1.jpg", category: "Pull", nivel: 6, type: "Vertical", division: "One Arm Pull Ups (um braço) - Vertical", required:"barraFixa" },
  { name: "Pull Ups com ajuda", url: "https://network.grupoabril.com.br/wp-content/uploads/sites/2/2017/01/xxxx.jpg?quality=85&strip=all&w=1024", category: "Pull", nivel: 1, type: "Vertical", division: "Weigthed Pull Ups - Vertical", required:"barraFixa" },
  // { name: "Pull Ups negativo", url: "https://www.fitstream.com/images/bodyweight-training/bodyweight-exercises/negative-pull-up-main.png", category: "Pull", nivel: 2, type: "Vertical", division: "Weigthed Pull Ups - Vertical", required:"" },
  { name: "Pull Ups", url: "http://2.bp.blogspot.com/-kKolopOtBl8/UDvUdp8cDTI/AAAAAAAABw8/KwV1AzFxPsE/s400/FITNESS_proradicalskate.jpg", category: "Pull", nivel: 3, type: "Vertical", division: "Weigthed Pull Ups - Vertical", required:"barraFixa" },
  { name: "Pull Ups +18% seu peso", url: "https://st4.depositphotos.com/13768208/40092/i/450/depositphotos_400928346-stock-photo-cross-fit-seminar-staff-member.jpg", category: "Pull", nivel: 4, type: "Vertical", division: "Weigthed Pull Ups - Vertical", required:"barraFixa" },
  { name: "Pull Ups +35% seu peso", url: "https://st4.depositphotos.com/13768208/40092/i/450/depositphotos_400928346-stock-photo-cross-fit-seminar-staff-member.jpg", category: "Pull", nivel: 5, type: "Vertical", division: "Weigthed Pull Ups - Vertical", required:"barraFixa" },
  { name: "Pull Ups +50% seu peso", url: "https://st4.depositphotos.com/13768208/40092/i/450/depositphotos_400928346-stock-photo-cross-fit-seminar-staff-member.jpg", category: "Pull", nivel: 6, type: "Vertical", division: "Weigthed Pull Ups - Vertical", required:"barraFixa" },
  { name: "Kipping Pull-ups", url: "https://i.ytimg.com/vi_webp/AyPTCEXTjOo/maxresdefault.webp", category: "Pull", nivel: 2, type: "Vertical", division: "Pull Ups Explosivos - Vertical", required:"barraFixa" },
  { name: "Pull-ups", url: "http://2.bp.blogspot.com/-kKolopOtBl8/UDvUdp8cDTI/AAAAAAAABw8/KwV1AzFxPsE/s400/FITNESS_proradicalskate.jpg", category: "Pull", nivel: 3, type: "Vertical", division: "Pull Ups Explosivos - Vertical", required:"barraFixa" },
  { name: "Kipping Pull-ups com Palma", url: "https://i.ytimg.com/vi_webp/AyPTCEXTjOo/maxresdefault.webp", category: "Pull", nivel: 4, type: "Vertical", division: "Pull Ups Explosivos - Vertical", required:"barraFixa" },
  { name: "Pull-ups com Palma sem Kipping", url: "https://doutorjairo.uol.com.br/media/uploads/istock-923748448.jpg", category: "Pull", nivel: 5, type: "Vertical", division: "Pull Ups Explosivos - Vertical", required:"barraFixa" },
  { name: "L-sit Pull-ups com Palma", url: "https://i.pinimg.com/564x/f3/b2/eb/f3b2eb20fc9472333072dab45e4140a6.jpg", category: "Pull", nivel: 6, type: "Vertical", division: "Pull Ups Explosivos - Vertical", required:"barraFixa" },
  { name: "Squat 45º", url: "https://static.tuasaude.com/media/article/3k/ru/6-exercicios-de-agachamento-para-gluteos_9131_l.jpg", category: "Legs", nivel: 1, type: "Parte da frente", division: "Squat (Push) - Parte da frente", required:"" },
  { name: "Full Squat (descer tudo)", url: "https://static.vecteezy.com/ti/vetor-gratis/p2/8635575-mulher-fazendo-peso-corporal-agachamento-exercicio-plano-ilustracao-isolado-em-fundo-branco-vetor.jpg", category: "Legs", nivel: 2, type: "Parte da frente", division: "Squat (Push) - Parte da frente", default: true, required:"" },
  { name: "Side to Side Squat", url: "https://www.spotebi.com/wp-content/uploads/2015/02/side-to-side-squats-exercise-illustration.jpg", category: "Legs", nivel: 3, type: "Parte da frente", division: "Squat (Push) - Parte da frente", required:"" },
  { name: "Pistol", url: "https://www.spotebi.com/wp-content/uploads/2015/05/pistol-squat-exercise-illustration.jpg", category: "Legs", nivel: 4, type: "Parte da frente", division: "Squat (Push) - Parte da frente", required:"" },
  { name: "Pistol + 20% seu peso", url: "https://horadotreino.com.br/wp-content/uploads/2013/12/agachamento-unilateral2.jpg", category: "Legs", nivel: 5, type: "Parte da frente", division: "Squat (Push) - Parte da frente", required:"" },
  { name: "Pistol + 35% seu peso", url: "https://horadotreino.com.br/wp-content/uploads/2013/12/agachamento-unilateral2.jpg", category: "Legs", nivel: 6, type: "Parte da frente", division: "Squat (Push) - Parte da frente", required:"" },
  { name: "Hip Thruster", url: "https://thumbs.dreamstime.com/z/mulher-fazendo-levantamentos-eleva%C3%A7%C3%A3o-da-bunda-exerc%C3%ADcio-de-pontes-que-exercem-uma-ilustra%C3%A7%C3%A3o-plana-do-vetor-isolada-em-fundo-236723402.jpg", category: "Legs", nivel: 1, type: "Parte de trás", division: "Hip Thruster (Pull) - Parte de trás", default: true, required:"" },
  { name: "Elevated Hip Thruster", url: "https://doctorlib.info/sport/mens-health-body/mens-health-body.files/image024.jpg", category: "Legs", nivel: 2, type: "Parte de trás", division: "Hip Thruster (Pull) - Parte de trás", required:"" },
  { name: "One Leg Hip Thruster", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/weighted-one-leg-hip-thrust-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Legs", nivel: 3, type: "Parte de trás", division: "Hip Thruster (Pull) - Parte de trás", required:"" },
  { name: "Weighted Hip Thruster", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2017/04/barbell-hip-thrust-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Legs", nivel: 4, type: "Parte de trás", division: "Hip Thruster (Pull) - Parte de trás", required:"" },
  { name: "Stiff Unilateral", url: "https://i.pinimg.com/564x/9d/6d/a9/9d6da9c12158ec52d1f660bf12fa490c.jpg", category: "Legs", nivel: 1, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás", required:"" },
  { name: "Flexão de Tronco", url: "https://thumbs.dreamstime.com/z/exerc%C3%ADcio-da-aptid%C3%A3o-flex%C3%A3o-do-tronco-com-eleva%C3%A7%C3%A3o-da-pelve-que-encontra-se-no-assoalho-f%C3%AAmea-64591838.jpg", category: "Legs", nivel: 2, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás", required:"" },
  { name: "Nordic Cruls 45º", url: "https://en.pimg.jp/076/410/785/1/76410785.jpg", category: "Legs", nivel: 3, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás", required:"" },
  { name: "Nordic Cruls Negativo", url: "https://en.pimg.jp/076/410/785/1/76410785.jpg", category: "Legs", nivel: 4, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás", required:"" },
  { name: "Nordic Curls", url: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-10-12-at-11-31-36-am-1634052723.png", category: "Legs", nivel: 5, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás", required:"" },
  { name: "Nordic Curls/braços para cima", url: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-10-12-at-11-31-36-am-1634052723.png", category: "Legs", nivel: 6, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás", required:"" },
  { name: "Afundo/Bulgarian Squat", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2021/10/Bulgarian-split-squat.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Legs", nivel: 2, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "Shrimp com apoio no joelho", url: "https://www.getstrong.fit/images/Shrimp-Squat.jpg?ezimgfmt=rs:620x347/rscb1/ng:webp/ngcb1", category: "Legs", nivel: 3, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "Shrimp com joelho ao chão", url: "https://www.getstrong.fit/images/Shrimp-Squat.jpg?ezimgfmt=rs:620x347/rscb1/ng:webp/ngcb1", category: "Legs", nivel: 4, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "One Hand Shrimp", url: "https://www.getstrong.fit/images/Shrimp-Squat.jpg?ezimgfmt=rs:620x347/rscb1/ng:webp/ngcb1", category: "Legs", nivel: 5, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "2 Hands Shrimp", url: "https://www.getstrong.fit/images/Shrimp-Squat.jpg?ezimgfmt=rs:620x347/rscb1/ng:webp/ngcb1", category: "Legs", nivel: 6, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "Reverse Nordic Curls | Smith Sissy", url: "https://fitnessvolt.com/wp-content/uploads/2022/10/Reverse-Nordic-Curl-Guide-750x422.jpg", category: "Legs", nivel: 2, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "Sissy com Elevação Alta", url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/sissy-squat-muscles-768x569.png", category: "Legs", nivel: 3, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "Sissy com Elevação Média", url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/sissy-squat-muscles-768x569.png", category: "Legs", nivel: 4, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "Sissy com Elevação Minima", url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/sissy-squat-muscles-768x569.png", category: "Legs", nivel: 5, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "Sissy Squat", url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/sissy-squat-muscles-768x569.png", category: "Legs", nivel: 6, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente", required:"" },
  { name: "Tuck L-sit", url: "https://calisthenicsfamily.b-cdn.net/wp-content/uploads/2021/04/Tuck-Planche-progression-Tucked-L-sit.png", category: "Core", nivel: 1, type: "Abdômen", division: "L-sit (core) - Abdômen", required:"paralelas" },
  { name: "One Leg L-sit", url: "https://bodydojo.com/wp-content/uploads/2018/09/single-leg-L-sit-parallettes-400x300.jpg", category: "Core", nivel: 2, type: "Abdômen", division: "L-sit (core) - Abdômen", required:"paralelas" },
  { name: "L-sit", url: "https://www.shutterstock.com/image-vector/l-sit-hang-on-bar-600w-796165771.jpg", category: "Core", nivel: 3, type: "Abdômen", division: "L-sit (core) - Abdômen", default: true, required:"barraFixa" },
  { name: "Straddle L-sit", url: "https://mover.tips/pics/exercise/s/straddle-l-sit.png", category: "Core", nivel: 4, type: "Abdômen", division: "L-sit (core) - Abdômen", required:"paralelas" },
  { name: "Rings L-sit", url: "https://i.ytimg.com/vi/lwcHmXvw-T4/maxresdefault.jpg", category: "Core", nivel: 5, type: "Abdômen", division: "L-sit (core) - Abdômen", required:"argolas" },
  { name: "L-sit Supinado", url: "https://i.ytimg.com/vi/WHi1bvZLwlw/maxresdefault.jpg", category: "Core", nivel: 6, type: "Abdômen", division: "L-sit (core) - Abdômen", required:"barraFixa" },
  { name: "60s de Prancha Abdominal", url: "https://corpoesbelto.com.br/wp-content/uploads/2018/03/Exerc%C3%ADcio-de-Prancha.jpg", category: "Core", nivel: 1, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen", required:"" },
  { name: "Prancha Abdominal Unilateral", url: "https://treinomestre.com.br/wp-content/uploads/2021/07/prancha-lateral.jpg", category: "Core", nivel: 2, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen", required:"" },
  { name: "Rodinha de Joelhos", url: "https://treinomestre.com.br/wp-content/uploads/2017/02/roda-abdominal-exercicio.jpg", category: "Core", nivel: 3, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen", required: ['rodinha', 'argola'] },
  { name: "Rodinha na Rampa Inclinada", url: "https://treinomestre.com.br/wp-content/uploads/2017/02/roda-abdominal-exercicio.jpg", category: "Core", nivel: 4, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen", required: ['rodinha', 'argola'] },
  { name: "Rodinha no chão Negativa", url: "https://treinomestre.com.br/wp-content/uploads/2017/02/roda-abdominal-exercicio.jpg", category: "Core", nivel: 5, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen", required: ['rodinha', 'argola'] },
  { name: "Rodinha no chão", url: "https://treinomestre.com.br/wp-content/uploads/2017/02/roda-abdominal-exercicio.jpg", category: "Core", nivel: 6, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen", required: ['rodinha', 'argola'] },
  { name: "Elevação de Perna Encolhida no Solo", url: "https://i.ytimg.com/vi/SoX3_liHpZE/maxresdefault.jpg", category: "Core", nivel: 1, type: "Abdômen", division: "Toes To Bar - Abdômen", required:"" },
  { name: "Elevação de Perna no Solo", url: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/10/elevacao-de-pernas-e1475519816360.jpg", category: "Core", nivel: 2, type: "Abdômen", division: "Toes To Bar - Abdômen", required:"" },
  { name: "Meio Toes to Bar (perna até a metade)", url: "https://i.ytimg.com/vi/6dHvTlsMvNY/maxresdefault.jpg", category: "Core", nivel: 3, type: "Abdômen", division: "Toes To Bar - Abdômen", required:"barraFixa" },
  { name: "Straight Leg Toes to bar (até a barra)", url: "https://i.ytimg.com/vi/6dHvTlsMvNY/maxresdefault.jpg", category: "Core", nivel: 4, type: "Abdômen", division: "Toes To Bar - Abdômen", required:"barraFixa" },
  { name: "Straight Leg Toes to bar (até a barra)", url: "https://i.ytimg.com/vi/6dHvTlsMvNY/maxresdefault.jpg", category: "Core", nivel: 5, type: "Abdômen", division: "Toes To Bar - Abdômen", required:"barraFixa" },
  { name: "Weighted Toes to bar ", url: "https://i.ytimg.com/vi/xX9Hzi7Onnw/maxresdefault.jpg", category: "Core", nivel: 6, type: "Abdômen", division: "Toes To Bar - Abdômen", required:"barraFixa" },
  { name: "HR com Pernas Encolhida", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2022/01/Flat-bench-reverse-hyperextension-1.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Core", nivel: 2, type: "Lombar", division: "Hiperextensão Reversa (HR) - Lombar", required:"" },
  { name: "HR com 1 Perna", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2022/01/Flat-bench-reverse-hyperextension-1.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Core", nivel: 3, type: "Lombar", division: "Hiperextensão Reversa (HR) - Lombar", required:"" },
  { name: "Hiperextensão Reversa (Full)", url: "https://i.4playercamp.cz/img/e8f1f106582bff976ac2dc1cc8009f.jpg", category: "Core", nivel: 4, type: "Lombar", division: "Hiperextensão Reversa (HR) - Lombar", required:"" },
  { name: "Hiperextensão Reversa com Peso", url: "https://sc02.alicdn.com/kf/HTB1zoEQRVXXXXX8XVXXq6xXFXXXi/222228634/HTB1zoEQRVXXXXX8XVXXq6xXFXXXi.jpg_.webp", category: "Core", nivel: 6, type: "Lombar", division: "Hiperextensão Reversa (HR) - Lombar", required:"" },
  { name: "Abdominal Remador", url: "https://grandeatleta.com.br/wp-content/uploads/2021/02/abdominal-remador.jpg", nivel: 1, category: "Core", type: "Lombar", default: true, required:"" }

]

const exercisesBase = exercises.filter(e => e.default == true)

const div2 = document.getElementById('div2');

window.addEventListener("load", function () {

});

var treino = []
var newExercises = []
var newExercisesBase = []

function getImgUrl(name) {
  const exercise = exercises.find(e => e.name === name);
  return exercise.url;
}

function creatExercisesBase() {
  //Esconde
  const quiz = document.getElementById('quiz')
  quiz.classList.add('d-none')


  const btnGera = document.getElementById('btnGera')
  btnGera.classList.remove('d-none')
  // Div onde sera add os exercicios
  const divPai2 = document.getElementById('div2')
  var x = 1
  divPai2.classList.remove('d-none')



  newExercisesBase.forEach(exer => {

    if(exer == undefined){
      return
    }
    // Criação da nova div
    var novaDiv = document.createElement("div");
    novaDiv.id = "exer" + x;
    novaDiv.className = "col-lg-5 position-relative col-11 d-flex justify-content-center align-items-center rounded-3 p-2 m-2 bg-white";
    novaDiv.style.border = "1px solid rgb(163, 163, 163)";

    // Criação do conteúdo da div
    novaDiv.innerHTML = `
      <div class="row position-relative">
        <div class="col-3 d-flex justify-content-center align-items-center">
          <img class="rounded-4" id="${'img' + x}" width="68" height="68"
            src="${exer.url}"
            alt="">
        </div>

        <div class="col-9 d-flex align-items-center ps-3 pe-5">
          <div class="row">
            <div class="col-12 reset-Padding">
              <input type="hidden" id=${'nivel' + x} name="nivel" value="${exer.nivel}">
              <span id=${'ValidTitle' + x} class="reset text-uppercase" style="font-size: 18px;">${exer.name}</span>
            </div>

            <div class="col-4 d-flex flex-column justify-content-center align-items-start my-2 reset-Padding">
              <p class="reset text-uppercase text-gray1">SÉRIE</p>
              <input class="w-75 text-center rounded-3" type="text" placeholder="1" disabled>
            </div>

            <div class="col-4 d-flex flex-column justify-content-center align-items-center reset-Padding">
              <p id="${'repts' + x}" class="reset text-uppercase text-gray1">REPS</p>
              <input required="true" id="${'ValidExer' + x}" class="w-75 input-value text-center rounded-3"
                type="text">
            </div>

            <div class="col-4 d-flex flex-column justify-content-center align-items-end reset-Padding">
              <p class="reset text-uppercase text-gray1">PAUSE</p>
              <input required="true" disabled placeholder="3min"
                class="w-75 input-value text-center rounded-3" type="text">
            </div>
          </div>

          <i class="bi bi-three-dots-vertical position-absolute top-0 end-0 "></i>
        </div>

        <div id="${'toggleExer' + x}"class="col-12 d-none d-flex flex-column justify-content-center">

          <button id="${'btn' + 1}" onclick="filter(${x}, '${exer.name}', '${exer.category}', '${exer.type}', ${exer.nivel})" class="btn btn-primary mb-2 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Trocar Exercicío</button>
            
          </button>

            <span id="${'heavy' + x}" class="reset text-danger text-start px-2 d-none" style="font-size: 10px;">
                    *Ops, sua quantidade de repetição está baixa! Vamos trocar para um mais leve?
                </span>

                 <span id="${'light' + x}" class="reset text-danger text-start px-2 d-none" style="font-size: 10px;">
                    *Ops, sua quantidade de repetição está alta! Vamos trocar para um mais pesado?
                </span> 

                </div>
                <span id="${'success' + x}" class="reset px-3 text-start text-success d-none" style="font-size: 10px;">
                    Perfeito, só aguardar o tempo do pause para prosseguir!
                </span> 
      </div>`;
    x += 1
    divPai2.appendChild(novaDiv)
  })

  // Criando as verificações "Blur"
  for (let i = 1; i < 9; i++) {
    creatStruct(i)
  }

}

function filter(id, name, category, type, nivel) {
  const divHidden = document.getElementById('divToggle')
  divHidden.classList.remove('d-none')
  divHidden.classList.add('d-block')
  var filterType

  const inputValue = document.getElementById('ValidExer' + id)
  var input = parseInt(inputValue.value)

  var level = exercises.filter(e => e.name == name)
  nivel = level[0].nivel


  // Se o nivel é passado usamos ele para configurar os exercicios anteriores e posteriores 
  if (input != null) {
    input == 0 || input <= 3 ? nivel -= 2 : null;

    input == 4 || input == 5 ? nivel -= 1 : null;

    input >= 5 && input <= 15 ? nivel : null  // valor ser mostrado default

    input > 15 && input <= 25 ? nivel += 1 : null;

    input > 25 && input <= 40 ? nivel += 2 : null;

    nivel > 6 ? nivel = 6 : nivel = nivel

    nivel < 0 ? nivel = 0 : nivel = nivel
  }



  if (category) {
    filterType = exercises.filter(exercise => exercise.category === category);
  }
  // Filtra os exercícios com base no nível, se o nível for especificado
  if (nivel !== undefined && nivel >= 0) {
    filterType = filterType.filter(exercise => exercise.nivel === nivel);
  }
  // Filtra os exercícios com base no tipo, se o tipo for especificado
  if (type) {
    filterType = filterType.filter(exercise => exercise.type === type);
  }

  const divPai = document.getElementById('divToggle')
  divPai.innerHTML = ''
  var x = 1
  filterType.forEach(e => {
    // divPai.appendChild(div)
    const parent = document.querySelector('.parent');

    // cria o primeiro elemento
    const div1 = document.createElement('div');
    div1.classList.add('row', 'reset-Padding', 'my-3');

    // cria o segundo elemento
    const div2s = document.createElement('div');
    div2s.classList.add('col-5', 'reset-Padding', 'd-flex', 'justify-content-center', 'align-items-center');

    // cria o terceiro elemento
    const img = document.createElement('img');
    img.setAttribute('width', '115');
    img.setAttribute('height', 'auto');
    img.setAttribute('src', e.url);

    // adiciona o terceiro elemento ao segundo elemento
    div2s.appendChild(img);

    // cria o quarto elemento
    const div3 = document.createElement('div');
    div3.classList.add('col-7', 'd-flex', 'align-items-center', 'reset-Padding');

    // cria o quinto elemento
    const div4 = document.createElement('div');
    div4.classList.add('row', 'reset-Padding');
    div4.id = 'row' + x
    // cria o sexto elemento
    const div5 = document.createElement('div');
    div5.classList.add('col-12', 'd-flex', 'justify-content-start', 'align-items-center', 'reset-Padding');

    // cria o sétimo elemento
    const span1 = document.createElement('span');
    span1.classList.add('reset');
    span1.textContent = e.name;

    // adiciona o sétimo elemento ao sexto elemento
    div5.appendChild(span1);

    // adiciona o sexto elemento ao quinto elemento
    div4.appendChild(div5);

    // cria o oitavo elemento
    const div6 = document.createElement('div');
    div6.classList.add('col-12', 'd-flex', 'justify-content-start', 'align-items-center', 'reset-Padding');

    // cria o nono elemento
    const span2 = document.createElement('span');
    span2.classList.add('reset');
    span2.textContent = `(${e.category} ${e.type})`;

    // adiciona o nono elemento ao oitavo elemento
    div6.appendChild(span2);

    // adiciona o oitavo elemento ao quinto elemento
    div4.appendChild(div6);

    // cria o décimo elemento
    const div7 = document.createElement('div');
    div7.classList.add('col-12', 'd-flex', 'justify-content-center', 'align-items-center', 'reset-Padding', 'W-100');

    // cria o décimo primeiro elemento
    const button = document.createElement('button');
    button.onclick = function () { subs(id, e.name, e.category, e.type, e.url, e.nivel) };
    button.id = 'toggle' + x
    button.className = 'btn btn-primary mt-2';
    button.innerText = 'Trocar';
    button.classList.add('btn', 'btn-primary', 'mt-2');
    button.setAttribute('data-bs-dismiss', 'modal');
    button.setAttribute('style', 'width: 100%');
    button.textContent = 'Trocar';

    // adiciona o décimo primeiro elemento ao décimo elemento
    div7.appendChild(button);

    // adiciona o quinto e o décimo elemento ao quarto elemento
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(div7);

    // adiciona o segundo e o quarto elemento ao terceiro elemento
    div3.appendChild(div4);

    // adiciona o segundo e o terceiro elemento ao primeiro elemento
    div1.appendChild(div2s);
    div1.appendChild(div3);

    // adiciona o primeiro elemento ao elemento pai
    divPai.appendChild(div1);
    x++
  })

}

function subs(id, name, category, type, img, nivel) {
  const Name = document.getElementById('ValidTitle' + id)
  const Img = document.getElementById('img' + id)
  const div = document.getElementById('toggleExer' + id)
  const input = document.getElementById('ValidExer' + id)
  const repts = document.getElementById('repts' + id)

  // zerar a div do botão
  div.innerHTML = ''

  div.innerHTML = `<button id="${'btn' + id}" onclick="filter(${id}, '${name}', '${category}', '${type}', ${nivel})" class="btn btn-primary mb-2 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Trocar Exercicío</button>
  <span id="${'heavy' + id}" class="reset text-danger text-start px-2 d-none" style="font-size: 10px;">
  *Ops, sua quantidade de repetição está baixa! Vamos trocar para um mais leve?
  </span>

  <span id="${'light' + id}" class="reset text-danger text-start px-2 d-none" style="font-size: 10px;">
    *Ops, sua quantidade de repetição está alta! Vamos trocar para um mais pesado?
  </span> 

  </div>
  <span id="${'success' + id}" class="reset px-3 text-start text-success d-none" style="font-size: 10px;">
    Perfeito, só aguardar o tempo do pause para prosseguir!
  </span> 
  `

  // Trocando o exercicio
  Name.innerHTML = name
  Img.src = img

  // Esconde o button
  const btn = document.getElementById('toggleExer' + id)
  btn.classList.add('d-none')
  btn.classList.remove('d-block')

  // Zerar input
  input.value = ''

  input.classList.remove('text-danger')
  input.classList.remove('input-exer')
  input.classList.remove('input-danger')
  input.classList.remove('input-exer-fail')

  input.classList.add('input-exer')
  input.classList.add('input-value')

  repts.classList.remove('text-danger')
  repts.classList.add('text-gray1')


}

function openToggleExer(id, Title, Input) {
  const input = document.getElementById('ValidExer' + id);
  const btn = document.getElementById('toggleExer' + id)
  const light = document.getElementById('light' + id)
  const heavy = document.getElementById('heavy' + id)
  const repts = document.getElementById('repts' + id)
  const success = document.getElementById('success' + id)


  if (input.value < 5) {
    // Texto de sucesso some
    success.classList.add('d-none')

    // Mostra o botão de trocar o exercicio
    btn.classList.add('d-block')
    btn.classList.remove('d-none')

    //Mostra a obs de exer pesado
    heavy.classList.add('d-block')
    heavy.classList.remove('d-none')

    //Oculta a obs de exer leve
    light.classList.add('d-none')
    light.classList.remove('d-block')

    //Add visuald e erro
    input.classList.add('text-danger')
    input.classList.add('input-danger')

    repts.classList.add('text-danger')
    repts.classList.remove('text-gray1')

  }
  if (input.value > 4 && input.value < 16) {
    success.classList.remove('d-none')
    // Tempo da message de sucesso
    setTimeout(function () {
      success.classList.add("d-none");
    }, 10000);
    input.classList.remove('text-danger')
    input.classList.remove('input-danger')

    repts.classList.remove('text-danger')
    repts.classList.add('text-gray1')

    btn.classList.add('d-none')
    btn.classList.remove('d-block')
    gerarTreino(Title, Input, id)

    const divPai = document.getElementById('divToggle')
    divPai.innerHTML = ''
    if (treino.length === 8) {
      // fechar model
      // const button = document.getElementById('saveTraining')
      // button.setAttribute('data-bs-dismiss', 'modal')
    }
  }
  if (input.value > 15) {
    // Texto de sucesso some
    success.classList.add('d-none')

    // Mostra o botão de trocar o exercicio
    btn.classList.add('d-block')
    btn.classList.remove('d-none')

    //Mostra a obs de exer leve
    light.classList.add('d-block')
    light.classList.remove('d-none')

    //Oculta a obs de exer pesado
    heavy.classList.add('d-none')
    heavy.classList.remove('d-block')

    //Add visuald e erro
    input.classList.add('text-danger')
    input.classList.add('input-danger')

    repts.classList.add('text-danger')
    repts.classList.remove('text-gray1')
  }
}

function addColorError() {
  for (let i = 1; i < 9; i++) {
    const input = document.getElementById('ValidExer' + i)
    const title = document.getElementById('ValidTitle' + i)
    const repts = document.getElementById('repts' + i)
    const light = document.getElementById('light' + i)
    const heavy = document.getElementById('heavy' + i)


    if (input.value == NaN || input.value == null || input.value == undefined || input.value == "") {
      // Se o input estiver vazio add as classes 
      input.classList.remove('input-exer')
      input.classList.add('input-exer-fail')
      repts.classList.add('text-danger')
      // title.classList.add('text-danger')
    } else {
      // Se estiver preenchido
      input.classList.add('input-exer')
      input.classList.remove('input-exer-fail')
      repts.classList.remove('text-danger')
      // title.classList.remove('text-danger')


      openToggleExer(i, title, input)
    }

  }
}

function removeColorError() {
  const input = document.getElementById('ValidExer' + id)
  const title = document.getElementById('ValidTitle' + id)
  const repts = document.getElementById('repts' + id)

  input.classList.add('input-exer')
  input.classList.remove('input-exer-fail')
  repts.classList.remove('text-danger')
  title.classList.remove('text-danger')
}

function creatStruct(id) {
  const input = document.getElementById('ValidExer' + id)
  const title = document.getElementById('ValidTitle' + id)
  const repts = document.getElementById('repts' + id)

  input.addEventListener('blur', function () {
    if (input.value == NaN ||
      input.value == null ||
      input.value == undefined ||
      input.value == "") {

      input.classList.remove('input-exer')
      input.classList.add('input-exer-fail')
      repts.classList.add('text-danger')
    } else {
      repts.classList.remove('text-danger')
      input.classList.remove('input-exer-fail')
      input.classList.add('input-exer')
      openToggleExer(id, title, input)
    }
  })
}

function gerarTreino(title, input, id) {
  // Cria um novo objeto com as informações do exercício
  const exer = getImgUrl(title.innerHTML)

  //Se nao tiver equipamente para fazer um do tipo , tera que montar 5 séries do exercicio que ficou do max - 2

  const novoExercicio = { name: title.innerHTML, count: (input.value - 1), rept: 3, rest: 3, url: exer, num: id };

  // Verifica se já existe um exercício igual no array
  const exercicioExistente = treino.find((exercicio) => {
    if (exercicio.num == novoExercicio.num) {
      // Atualiza o objeto existente
      exercicio.name = novoExercicio.name;
      exercicio.rept = novoExercicio.rept;
      exercicio.rest = novoExercicio.rest;
      return true; // Retorna true para indicar que o objeto foi atualizado
    }
    return (
      exercicio.name === novoExercicio.name &&
      exercicio.rept === novoExercicio.rept &&
      exercicio.rest === novoExercicio.rest &&
      exercicio.num === novoExercicio.num
    );
  });

  if (exercicioExistente) {
    // Se o exercício já existe, atualiza o valor de count
    exercicioExistente.count = input.value - 1;

  } else if (novoExercicio.count === -1 || novoExercicio.count === 0) {
    // Se o exercício não existe E o valor de count é inválido, exibe uma mensagem de erro e não adiciona ao array
    return

  } else {
    // Adiciona o novo exercício no final do array treino
    treino.push(novoExercicio);
  }
}

// function enviarTreino() {

//   if (treino.length === 8) {
//     const divPai = document.getElementById('trainingGenerated')
//     divPai.innerHTML = ''
//     treino.forEach(exer => {

//       const title = document.getElementById('txtTitle')
//       title.classList.remove('d-none')
//       title.classList.add('d-block')

//       const div = document.createElement('div');
//       // adicionar as classes à div
//       div.classList.add('col-lg-6', 'col-12', 'position-relative', 'rounded-3', 'p-3', 'bg-white');

//       // criar o elemento h3 e adicionar o texto
//       const h3 = document.createElement('h3');
//       h3.classList.add('reset', 'text-center');
//       h3.setAttribute('id', 'ValidTitle8');
//       h3.textContent = exer.name;

//       // adicionar o elemento h3 à div
//       div.appendChild(h3);

//       // criar o elemento div
//       const div2 = document.createElement('div');
//       div2.classList.add('d-flex', 'rounded-3', 'p-3', 'bg-white', 'w-100');
//       div2.style.border = '1px solid rgb(20, 20, 20)';

//       // criar o elemento div com a imagem e adicionar a imagem
//       const imgDiv = document.createElement('div');
//       imgDiv.classList.add('d-flex', 'justify-content-center', 'img-card', 'reset-Padding');
//       const img = document.createElement('img');
//       img.classList.add('img-fluid', 'img-resolution');
//       img.setAttribute('id', 'img1');
//       img.setAttribute('width', '150');
//       img.setAttribute('height', '150');
//       img.setAttribute('src', exer.url);
//       img.setAttribute('alt', '');
//       imgDiv.appendChild(img);

//       // criar o elemento div com as informações da série e adicionar as informações
//       const infoDiv = document.createElement('div');
//       infoDiv.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-content-center');
//       infoDiv.style.width = '350px';

//       const serieDiv = document.createElement('div');
//       serieDiv.classList.add('d-flex', 'text-center', 'justify-content-between', 'align-items-center');

//       const serieSpan1 = document.createElement('span');
//       serieSpan1.textContent = 'Serie: ';

//       const serieSpan2 = document.createElement('span');
//       serieSpan2.textContent = exer.rept + 'x';
//       serieDiv.appendChild(serieSpan1);
//       serieDiv.appendChild(serieSpan2);

//       const repDiv = document.createElement('div');
//       repDiv.classList.add('d-flex', 'text-center', 'align-items-center', 'justify-content-between');

//       const repSpan1 = document.createElement('span');
//       repSpan1.textContent = 'Num de repetição: ';

//       const repSpan2 = document.createElement('span');
//       repSpan2.textContent = exer.count;

//       repDiv.appendChild(repSpan1);
//       repDiv.appendChild(repSpan2);
//       const descDiv = document.createElement('div');
//       descDiv.classList.add('d-flex', 'text-center', 'align-items-center', 'justify-content-between');
//       const descSpan1 = document.createElement('span');
//       descSpan1.textContent = 'Descanso: ';
//       const descSpan2 = document.createElement('span');
//       descSpan2.textContent = exer.rest + ' Minutos';
//       descDiv.appendChild(descSpan1);
//       descDiv.appendChild(descSpan2);
//       infoDiv.appendChild(serieDiv);
//       infoDiv.appendChild(repDiv);
//       infoDiv.appendChild(descDiv);

//       // adicionar os elementos à segunda div
//       div2.appendChild(imgDiv);
//       div2.appendChild(infoDiv);

//       // adicionar a segunda div à primeira div
//       div.appendChild(div2);
//       divPai.appendChild(div);
//     })
//   } else {
//     for (let i = 1; i < 9; i++) {
//       const input = document.getElementById('ValidExer' + i)


//       if (input.value == NaN ||
//         input.value == null ||
//         input.value == undefined ||
//         input.value == "") {

//         input.classList.remove('input-exer')
//         input.classList.add('input-exer-fail')
//       } else {
//         input.classList.remove('input-exer-fail')
//         input.classList.add('input-exer')
//       }

//     }
//   }
// }

function enviarTreino2() {
  if (treino.length == 8) {
    fetch('/sendTraining', {
      method: 'POST',
      body: JSON.stringify(treino),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.redirected) {
          window.location.replace(response.url);
        } else {

        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  } else {
    addColorError()
  }


}
