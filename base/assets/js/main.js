
const exercises = [
  { name: "Knee Push Ups (de joelho)", url: "https://cdn.w600.comps.canstockphoto.com.br/trabalhando-dela-joelho-femininas-vetor-clip-arte_csp89802369.jpg", category: "Push", nivel: 0, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal" },
  { name: "Flexões Padrão", url: "https://aprovataf.com.br/wp-content/uploads/2016/04/Flex%C3%A3o-de-bra%C3%A7o-no-solo-AprovaTAF.jpg", category: "Push", nivel: 1, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal", default: true },
  { name: "Diamond Push Ups", url: "https://weighttraining.guide/wp-content/uploads/2017/07/diamond-push-up-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Push", nivel: 2, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal" },
  { name: "Archer Push Ups ", url: "https://images.squarespace-cdn.com/content/v1/5db20c73f80047725e83b73c/1605191028463-69TG5D2LHACZDGBUSVOX/service_1589888550_3778.jpg", category: "Push", nivel: 3, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal" },
  { name: "Rings Push Ups", url: "https://www.fitstream.com/images/ring-training/exercises/ring-push-up.png?w=80&h=80", category: "Push", nivel: 4, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal" },
  { name: "One Arm Push Ups Elevada", url: "https://static.strengthlevel.com/images/illustrations/one-arm-push-ups-1000x1000.jpg", category: "Push", nivel: 5, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal" },
  { name: "One Arm Push Ups/Tuck Planche", url: "https://post.healthline.com/wp-content/uploads/2019/07/Man-Exercising-1200x628-facebook.jpg", category: "Push", nivel: 6, type: "Horizontal", division: "Flexão (Push Ups) - Horizontal" },
  { name: "Bench Dips (Dips no banco)", url: "https://media.istockphoto.com/id/1277965681/pt/vetorial/bench-triceps-dips-female-exercise-guide-colorful-illustration.jpg?s=170667a&w=0&k=20&c=rys1gAWR29rv2zQL21jzAxKAmUhOaobuUjYkKQkOqj8=", category: "Push", nivel: 0, type: "Vertical", division: 'Dips - Vertical' },
  { name: "Dips com ajuda ou elastico", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dips.png/330px-Dips.png", category: "Push", nivel: 1, type: "Vertical", division: 'Dips - Vertical' },
  { name: "Dips negativo", url: "https://julienquaglierini.com/wp-content/uploads/2018/08/dips-768x432.jpg.webp", category: "Push", nivel: 3, type: "Vertical", division: 'Dips - Vertical' },
  { name: "Dips na paralela", url: "https://static.netshoes.com.br/produtos/barra-paralela-dip-de-parede-calistenia-(parafusos-e-buchas-plasticas)/06/06O-0003-006/06O-0003-006_zoom3.jpg?ts=1601643646", category: "Push", nivel: 4, type: "Vertical", division: 'Dips - Vertical', default: true },
  { name: "Dips em L-sit", url: "https://www.shutterstock.com/image-vector/male-athlete-silhouette-doing-calisthenics-600w-1348704965.jpg", category: "Push", nivel: 5, type: "Vertical", division: 'Dips - Vertical' },
  { name: "Tuck Planche Push Ups", url: "https://qph.cf2.quoracdn.net/main-qimg-1782c86f06ca832b93dc8ae85ed637ae", category: "Push", nivel: 6, type: "Vertical", division: 'Dips - Vertical' },
  { name: "Rings Suppor Hold ", url: "https://bodydojo.com/wp-content/uploads/2018/06/RTO-support-400x300.jpg", category: "Push", nivel: 1, type: "Vertical", division: "Dips na Argola - Vertical" },
  { name: "Rings Suppor Hold Supinado", url: "https://s3.amazonaws.com/prod.skimble/assets/832102/image_iphone.jpg", category: "Push", nivel: 2, type: "Vertical", division: "Dips na Argola - Vertical" },
  { name: "Ring Dips Negativo", url: "https://img.myloview.com.br/fotomurais/woman-doing-gymnastic-ring-dips-exercise-flat-vector-illustration-isolated-on-white-background-700-277885449.jpg", category: "Push", nivel: 3, type: "Vertical", division: "Dips na Argola - Vertical" },
  { name: "Ring Dips", url: "https://previews.123rf.com/images/lioputra/lioputra2011/lioputra201100076/158973747-gymnastic-ring-dips-exercise-flat-vector-illustration-isolated-on-white-background-workout.jpg", category: "Push", nivel: 4, type: "Vertical", division: "Dips na Argola - Vertical" },
  { name: "Dips em L-sit/Buldarian Dips", url: "https://cdn.vectorstock.com/i/1000x1000/05/62/man-doing-chair-bench-tricep-dips-exercise-vector-42870562.webp", category: "Push", nivel: 5, type: "Vertical", division: "Dips na Argola - Vertical" },
  { name: "Ring Dips Supinado", url: "https://www.shutterstock.com/image-vector/sporty-man-doing-ring-dips-600w-1360756589.jpg", category: "Push", nivel: 6, type: "Vertical", division: "Dips na Argola - Vertical" },
  { name: "Dips com ajuda", url: "https://thumbs.dreamstime.com/z/ilustra%C3%A7%C3%A3o-de-vetor-for%C3%A7a-exerc%C3%ADcio-barra-dip-do-varejo-com-fundo-branco-vetorial-215590449.jpg", category: "Push", nivel: 1, type: "Vertical", division: "Weigthed Dips - Vertical" },
  { name: "Dips + 20% do seu peso", url: "https://ginasiovirtual.com/wp-content/uploads/2021/06/fundos-com-peso.jpg", category: "Push", nivel: 4, type: "Vertical", division: "Weigthed Dips - Vertical" },
  { name: "Dips + 38% do seu peso", url: "https://ginasiovirtual.com/wp-content/uploads/2021/06/fundos-com-peso.jpg", category: "Push", nivel: 5, type: "Vertical", division: "Weigthed Dips - Vertical" },
  { name: "Dips + 55% do seu peso ", url: "https://ginasiovirtual.com/wp-content/uploads/2021/06/fundos-com-peso.jpg", category: "Push", nivel: 6, type: "Vertical", division: "Weigthed Dips - Vertical" },
  { name: "Pike Push Ups", url: "https://qph.cf2.quoracdn.net/main-qimg-47c44c047bbb8118ed02ff236da07841-lq", category: "Push", nivel: 1, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical" },
  { name: "Elevated Pike PU", url: "https://b1494239.smushcdn.com/1494239/wp-content/uploads/2013/12/pike-push-up-advanced-e1438882945766.jpg?lossy=0&strip=1&webp=1", category: "Push", nivel: 2, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical" },
  { name: "HSPU Negativo com kick | sem kick", url: "https://www.getpersonalgrowth.com/images/posts/8a57dd56ac409541f34d096ff1f903f4-0.jpg", category: "Push", nivel: 3, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical" },
  { name: "Wall HSPU (Handstand Push Ups)", url: "Wall HSPU (Handstand Push Ups)", category: "Push", nivel: 4, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical" },
  { name: "Wall HSPU c/ Paralela de frente | de costas", url: "https://elemento.ag/blog/wp-content/uploads/2022/02/image6.jpg", category: "Push", nivel: 5, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical" },
  { name: "HSPU Livre", url: "https://http2.mlstatic.com/D_NQ_NP_2X_813656-MLB46427391074_062021-F.webp", category: "Push", nivel: 6, type: "Vertical", division: "Flexão na Parada de Mãos - Vertical" },
  { name: "Negativas de Remada", url: "https://treinomestre.com.br/wp-content/uploads/2021/11/remada-articulada.jpg", category: "Pull", nivel: 1, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal" },
  { name: "Rows/Barra Australiana", url: "https://www.sport.es/labolsadelcorredor/wp-content/uploads/2018/05/Australian-pull-up.jpg", category: "Pull", nivel: 2, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal", default: true },
  { name: "Wide Rows (pegada aberta)", url: "https://www.spotebi.com/wp-content/uploads/2015/04/wide-row-exercise-illustration.jpg", category: "Pull", nivel: 3, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal" },
  { name: "Archer Rows Braços Dobrados ou Alta", url: "https://cdn.vectorstock.com/i/1000x1000/36/80/woman-doing-upper-back-exercise-archer-with-long-r-vector-43113680.webp", category: "Pull", nivel: 4, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal" },
  { name: "Archer Rows (braço esticado)/Tuck Front Lever", url: "https://cdn.vectorstock.com/i/1000x1000/36/80/woman-doing-upper-back-exercise-archer-with-long-r-vector-43113680.webp", category: "Pull", nivel: 5, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal" },
  { name: "Straddle One Arm Rows", url: "https://www.shutterstock.com/image-vector/man-doing-single-arm-bent-600w-2101536073.jpg", category: "Pull", nivel: 6, type: "Horizontal", division: " Rows/Barra Australiana - Horizontal" },
  { name: "Pull Ups com ajuda ou elastico", url: "https://network.grupoabril.com.br/wp-content/uploads/sites/2/2017/01/xxxx.jpg?quality=85&strip=all&w=1024", category: "Pull", nivel: 0, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical" },
  { name: "Pull Ups negativo", url: "https://www.fitstream.com/images/bodyweight-training/bodyweight-exercises/negative-pull-up-main.png", category: "Pull", nivel: 2, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical" },
  { name: "Pull Ups", url: "http://2.bp.blogspot.com/-kKolopOtBl8/UDvUdp8cDTI/AAAAAAAABw8/KwV1AzFxPsE/s400/FITNESS_proradicalskate.jpg", category: "Pull", nivel: 3, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical", default: true },
  { name: "Pull Ups em L-sit", url: "https://i.pinimg.com/564x/f3/b2/eb/f3b2eb20fc9472333072dab45e4140a6.jpg", category: "Pull", nivel: 4, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical" },
  { name: "Wide Pull Ups (pegada aberta)", url: "https://images.squarespace-cdn.com/content/v1/57efdb4cd482e918dc2a900f/1658358689971-JZXGL3SS7MY5ES2S9VVT/extra+wide+pull+up+grip.JPG?format=500w", category: "Pull", nivel: 5, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical" },
  { name: "Wide Pull Ups em L-sit", url: "https://www.fitliferegime.com/wp-content/uploads/2023/01/Muscle-Worked-During-Pull-Ups-1024x683.webp?ezimgfmt=ng:webp/ngcb1", category: "Pull", nivel: 6, type: "Vertical", division: "Barra Fixa (Pull Ups) - Vertical" },
  { name: "Archer Pull ups", url: "https://kengurupro.eu/wp-content/uploads/2020/10/k-005-1-1.jpg", category: "Pull", nivel: 6, type: "Vertical", division: "One Arm Pull Ups (um braço) - Vertical" },
  { name: "Pull Ups com ajuda", url: "https://network.grupoabril.com.br/wp-content/uploads/sites/2/2017/01/xxxx.jpg?quality=85&strip=all&w=1024", category: "Pull", nivel: 1, type: "Vertical", division: "Weigthed Pull Ups - Vertical" },
  // { name: "Pull Ups negativo", url: "https://www.fitstream.com/images/bodyweight-training/bodyweight-exercises/negative-pull-up-main.png", category: "Pull", nivel: 2, type: "Vertical", division: "Weigthed Pull Ups - Vertical" },
  { name: "Pull Ups", url: "http://2.bp.blogspot.com/-kKolopOtBl8/UDvUdp8cDTI/AAAAAAAABw8/KwV1AzFxPsE/s400/FITNESS_proradicalskate.jpg", category: "Pull", nivel: 3, type: "Vertical", division: "Weigthed Pull Ups - Vertical" },
  { name: "Pull Ups +18% seu peso", url: "https://st4.depositphotos.com/13768208/40092/i/450/depositphotos_400928346-stock-photo-cross-fit-seminar-staff-member.jpg", category: "Pull", nivel: 4, type: "Vertical", division: "Weigthed Pull Ups - Vertical" },
  { name: "Pull Ups +35% seu peso", url: "https://st4.depositphotos.com/13768208/40092/i/450/depositphotos_400928346-stock-photo-cross-fit-seminar-staff-member.jpg", category: "Pull", nivel: 5, type: "Vertical", division: "Weigthed Pull Ups - Vertical" },
  { name: "Pull Ups +50% seu peso", url: "https://st4.depositphotos.com/13768208/40092/i/450/depositphotos_400928346-stock-photo-cross-fit-seminar-staff-member.jpg", category: "Pull", nivel: 6, type: "Vertical", division: "Weigthed Pull Ups - Vertical" },
  { name: "Kipping Pull-ups", url: "https://i.ytimg.com/vi_webp/AyPTCEXTjOo/maxresdefault.webp", category: "Pull", nivel: 2, type: "Vertical", division: "Pull Ups Explosivos - Vertical" },
  { name: "Pull-ups", url: "http://2.bp.blogspot.com/-kKolopOtBl8/UDvUdp8cDTI/AAAAAAAABw8/KwV1AzFxPsE/s400/FITNESS_proradicalskate.jpg", category: "Pull", nivel: 3, type: "Vertical", division: "Pull Ups Explosivos - Vertical" },
  { name: "Kipping Pull-ups com Palma", url: "https://i.ytimg.com/vi_webp/AyPTCEXTjOo/maxresdefault.webp", category: "Pull", nivel: 4, type: "Vertical", division: "Pull Ups Explosivos - Vertical" },
  { name: "Pull-ups com Palma sem Kipping", url: "https://doutorjairo.uol.com.br/media/uploads/istock-923748448.jpg", category: "Pull", nivel: 5, type: "Vertical", division: "Pull Ups Explosivos - Vertical" },
  { name: "L-sit Pull-ups com Palma", url: "https://i.pinimg.com/564x/f3/b2/eb/f3b2eb20fc9472333072dab45e4140a6.jpg", category: "Pull", nivel: 6, type: "Vertical", division: "Pull Ups Explosivos - Vertical" },
  { name: "Squat 45º", url: "https://static.tuasaude.com/media/article/3k/ru/6-exercicios-de-agachamento-para-gluteos_9131_l.jpg", category: "Legs", nivel: 1, type: "Parte da frente", division: "Squat (Push) - Parte da frente" },
  { name: "Full Squat (descer tudo)", url: "https://static.vecteezy.com/ti/vetor-gratis/p2/8635575-mulher-fazendo-peso-corporal-agachamento-exercicio-plano-ilustracao-isolado-em-fundo-branco-vetor.jpg", category: "Legs", nivel: 2, type: "Parte da frente", division: "Squat (Push) - Parte da frente", default: true },
  { name: "Side to Side Squat", url: "https://www.spotebi.com/wp-content/uploads/2015/02/side-to-side-squats-exercise-illustration.jpg", category: "Legs", nivel: 3, type: "Parte da frente", division: "Squat (Push) - Parte da frente" },
  { name: "Pistol", url: "https://www.spotebi.com/wp-content/uploads/2015/05/pistol-squat-exercise-illustration.jpg", category: "Legs", nivel: 4, type: "Parte da frente", division: "Squat (Push) - Parte da frente" },
  { name: "Pistol + 20% seu peso", url: "https://horadotreino.com.br/wp-content/uploads/2013/12/agachamento-unilateral2.jpg", category: "Legs", nivel: 5, type: "Parte da frente", division: "Squat (Push) - Parte da frente" },
  { name: "Pistol + 35% seu peso", url: "https://horadotreino.com.br/wp-content/uploads/2013/12/agachamento-unilateral2.jpg", category: "Legs", nivel: 6, type: "Parte da frente", division: "Squat (Push) - Parte da frente" },
  { name: "Hip Thruster ", url: "https://thumbs.dreamstime.com/z/mulher-fazendo-levantamentos-eleva%C3%A7%C3%A3o-da-bunda-exerc%C3%ADcio-de-pontes-que-exercem-uma-ilustra%C3%A7%C3%A3o-plana-do-vetor-isolada-em-fundo-236723402.jpg", category: "Legs", nivel: 1, type: "Parte de trás", division: "Hip Thruster (Pull) - Parte de trás", default: true },
  { name: "Elevated Hip Thruster", url: "https://doctorlib.info/sport/mens-health-body/mens-health-body.files/image024.jpg", category: "Legs", nivel: 2, type: "Parte de trás", division: "Hip Thruster (Pull) - Parte de trás" },
  { name: "One Leg Hip Thruster", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/weighted-one-leg-hip-thrust-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Legs", nivel: 3, type: "Parte de trás", division: "Hip Thruster (Pull) - Parte de trás" },
  { name: "Weighted Hip Thruster", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2017/04/barbell-hip-thrust-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Legs", nivel: 4, type: "Parte de trás", division: "Hip Thruster (Pull) - Parte de trás" },
  { name: "Stiff Unilateral", url: "https://i.pinimg.com/564x/9d/6d/a9/9d6da9c12158ec52d1f660bf12fa490c.jpg", category: "Legs", nivel: 1, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás" },
  { name: "Flexão de Tronco", url: "https://thumbs.dreamstime.com/z/exerc%C3%ADcio-da-aptid%C3%A3o-flex%C3%A3o-do-tronco-com-eleva%C3%A7%C3%A3o-da-pelve-que-encontra-se-no-assoalho-f%C3%AAmea-64591838.jpg", category: "Legs", nivel: 2, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás" },
  { name: "Nordic Cruls 45º", url: "https://en.pimg.jp/076/410/785/1/76410785.jpg", category: "Legs", nivel: 3, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás" },
  { name: "Nordic Cruls Negativo", url: "https://en.pimg.jp/076/410/785/1/76410785.jpg", category: "Legs", nivel: 4, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás" },
  { name: "Nordic Curls", url: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-10-12-at-11-31-36-am-1634052723.png", category: "Legs", nivel: 5, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás" },
  { name: "Nordic Curls/braços para cima", url: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-10-12-at-11-31-36-am-1634052723.png", category: "Legs", nivel: 6, type: "Parte de trás", division: "Nordic Curls (Pull) - Parte de trás" },
  { name: "Afundo/Bulgarian Squat", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2021/10/Bulgarian-split-squat.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Legs", nivel: 2, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "Shrimp com apoio no joelho", url: "https://www.getstrong.fit/images/Shrimp-Squat.jpg?ezimgfmt=rs:620x347/rscb1/ng:webp/ngcb1", category: "Legs", nivel: 3, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "Shrimp com joelho ao chão", url: "https://www.getstrong.fit/images/Shrimp-Squat.jpg?ezimgfmt=rs:620x347/rscb1/ng:webp/ngcb1", category: "Legs", nivel: 4, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "One Hand Shrimp", url: "https://www.getstrong.fit/images/Shrimp-Squat.jpg?ezimgfmt=rs:620x347/rscb1/ng:webp/ngcb1", category: "Legs", nivel: 5, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "2 Hands Shrimp", url: "https://www.getstrong.fit/images/Shrimp-Squat.jpg?ezimgfmt=rs:620x347/rscb1/ng:webp/ngcb1", category: "Legs", nivel: 6, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "Reverse Nordic Curls | Smith Sissy", url: "https://fitnessvolt.com/wp-content/uploads/2022/10/Reverse-Nordic-Curl-Guide-750x422.jpg", category: "Legs", nivel: 2, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "Sissy com Elevação Alta", url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/sissy-squat-muscles-768x569.png", category: "Legs", nivel: 3, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "Sissy com Elevação Média", url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/sissy-squat-muscles-768x569.png", category: "Legs", nivel: 4, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "Sissy com Elevação Minima", url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/sissy-squat-muscles-768x569.png", category: "Legs", nivel: 5, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "Sissy Squat", url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/sissy-squat-muscles-768x569.png", category: "Legs", nivel: 6, type: "Parte da frente", division: "Shrimp Squat (Push) - Parte da frente" },
  { name: "Tuck L-sit", url: "https://calisthenicsfamily.b-cdn.net/wp-content/uploads/2021/04/Tuck-Planche-progression-Tucked-L-sit.png", category: "Core", nivel: 1, type: "Abdômen", division: "L-sit (core) - Abdômen" },
  { name: "One Leg L-sit", url: "https://bodydojo.com/wp-content/uploads/2018/09/single-leg-L-sit-parallettes-400x300.jpg", category: "Core", nivel: 2, type: "Abdômen", division: "L-sit (core) - Abdômen" },
  { name: "L-sit", url: "https://www.shutterstock.com/image-vector/l-sit-hang-on-bar-600w-796165771.jpg", category: "Core", nivel: 3, type: "Abdômen", division: "L-sit (core) - Abdômen", default: true },
  { name: "Straddle L-sit", url: "https://mover.tips/pics/exercise/s/straddle-l-sit.png", category: "Core", nivel: 4, type: "Abdômen", division: "L-sit (core) - Abdômen" },
  { name: "Rings L-sit", url: "https://i.ytimg.com/vi/lwcHmXvw-T4/maxresdefault.jpg", category: "Core", nivel: 5, type: "Abdômen", division: "L-sit (core) - Abdômen" },
  { name: "L-sit Supinado", url: "https://i.ytimg.com/vi/WHi1bvZLwlw/maxresdefault.jpg", category: "Core", nivel: 6, type: "Abdômen", division: "L-sit (core) - Abdômen" },
  { name: "60s de Prancha Abdominal", url: "https://corpoesbelto.com.br/wp-content/uploads/2018/03/Exerc%C3%ADcio-de-Prancha.jpg", category: "Core", nivel: 1, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen" },
  { name: "Prancha Abdominal Unilateral", url: "https://treinomestre.com.br/wp-content/uploads/2021/07/prancha-lateral.jpg", category: "Core", nivel: 2, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen" },
  { name: "Rodinha de Joelhos", url: "https://treinomestre.com.br/wp-content/uploads/2017/02/roda-abdominal-exercicio.jpg", category: "Core", nivel: 3, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen" },
  { name: "Rodinha na Rampa Inclinada", url: "https://treinomestre.com.br/wp-content/uploads/2017/02/roda-abdominal-exercicio.jpg", category: "Core", nivel: 4, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen" },
  { name: "Rodinha no chão Negativa", url: "https://treinomestre.com.br/wp-content/uploads/2017/02/roda-abdominal-exercicio.jpg", category: "Core", nivel: 5, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen" },
  { name: "Rodinha no chão", url: "https://treinomestre.com.br/wp-content/uploads/2017/02/roda-abdominal-exercicio.jpg", category: "Core", nivel: 6, type: "Abdômen", division: "Abdominal na Rodinha - Abdômen" },
  { name: "Elevação de Perna Encolhida no Solo", url: "https://i.ytimg.com/vi/SoX3_liHpZE/maxresdefault.jpg", category: "Core", nivel: 1, type: "Abdômen", division: "Toes To Bar - Abdômen" },
  { name: "Elevação de Perna no Solo", url: "https://www.mundoboaforma.com.br/wp-content/uploads/2016/10/elevacao-de-pernas-e1475519816360.jpg", category: "Core", nivel: 2, type: "Abdômen", division: "Toes To Bar - Abdômen" },
  { name: "Meio Toes to Bar (perna até a metade)", url: "https://i.ytimg.com/vi/6dHvTlsMvNY/maxresdefault.jpg", category: "Core", nivel: 3, type: "Abdômen", division: "Toes To Bar - Abdômen" },
  { name: "Straight Leg Toes to bar (até a barra)", url: "https://i.ytimg.com/vi/6dHvTlsMvNY/maxresdefault.jpg", category: "Core", nivel: 4, type: "Abdômen", division: "Toes To Bar - Abdômen" },
  { name: "Straight Leg Toes to bar (até a barra)", url: "https://i.ytimg.com/vi/6dHvTlsMvNY/maxresdefault.jpg", category: "Core", nivel: 5, type: "Abdômen", division: "Toes To Bar - Abdômen" },
  { name: "Weighted Toes to bar ", url: "https://i.ytimg.com/vi/xX9Hzi7Onnw/maxresdefault.jpg", category: "Core", nivel: 6, type: "Abdômen", division: "Toes To Bar - Abdômen" },
  { name: "HR com Pernas Encolhida", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2022/01/Flat-bench-reverse-hyperextension-1.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Core", nivel: 2, type: "Lombar", division: "Hiperextensão Reversa (HR) - Lombar" },
  { name: "HR com 1 Perna", url: "https://cdn-0.weighttraining.guide/wp-content/uploads/2022/01/Flat-bench-reverse-hyperextension-1.png?ezimgfmt=ng%3Awebp%2Fngcb4", category: "Core", nivel: 3, type: "Lombar", division: "Hiperextensão Reversa (HR) - Lombar" },
  { name: "Hiperextensão Reversa (Full)", url: "https://i.4playercamp.cz/img/e8f1f106582bff976ac2dc1cc8009f.jpg", category: "Core", nivel: 4, type: "Lombar", division: "Hiperextensão Reversa (HR) - Lombar" },
  { name: "Hiperextensão Reversa com Peso", url: "https://sc02.alicdn.com/kf/HTB1zoEQRVXXXXX8XVXXq6xXFXXXi/222228634/HTB1zoEQRVXXXXX8XVXXq6xXFXXXi.jpg_.webp", category: "Core", nivel: 6, type: "Lombar", division: "Hiperextensão Reversa (HR) - Lombar" },
  { name: "Abdominal Remador", url: "https://grandeatleta.com.br/wp-content/uploads/2021/02/abdominal-remador.jpg", nivel: 1, category: "Core", type: "Lombar", default: true }

]

const exercisesBase = exercises.filter(e => e.default == true)

const div2 = document.getElementById('div2');

function toggleShowDiv2() {
  div2.classList.remove('d-none')
  div2.classList.add('d-block');

  for (let i = 1; i < 9; i++) {
    creatStruct(i)
  }
}

window.addEventListener("load", function () {
  creatExercisesBase()
  toggleShowDiv2();
});

var treino = []

function getImgUrl(name) {
  const exercise = exercises.find(e => e.name === name);
  return exercise.url;
}

function creatExercisesBase() {
  // Divi onde sera add os exercicios
  const divPai2 = document.getElementById('div2')
  var x = 1
  exercisesBase.forEach(exer => {
    const div = document.createElement('div');
    div.setAttribute('id', 'exer' + x);
    div.setAttribute('class', 'col-lg-5 col-11 position-relative rounded-3 m-2 bg-white');
    div.setAttribute('style', 'border: 1px solid rgb(20, 20, 20);');

    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row reset-Padding h-100');

    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'col-6 d-flex justify-content-center img-card reset-Padding');

    const img = document.createElement('img');
    img.setAttribute('class', 'img-fluid img-resolution');
    img.setAttribute('id', 'img' + x);
    img.setAttribute('width', '150');
    img.setAttribute('height', '150');
    img.setAttribute('src', exer.url);
    img.setAttribute('alt', '');

    imgDiv.appendChild(img);

    const textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'col-6 d-flex flex-column justify-content-around align-items-start reset-Padding');
    textDiv.setAttribute('style', 'height: 200px;');

    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('style', 'width: fit-content;');

    const category = document.createElement('h6');
    category.setAttribute('class', 'reset text-start');
    category.setAttribute('id', 'category' + x);
    category.innerText = "(" + exer.category + " " + exer.type + ")";

    const title = document.createElement('h5');
    title.setAttribute('class', 'reset text-start text-uppercase');
    title.setAttribute('id', 'ValidTitle' + x);
    title.innerText = exer.name;

    titleDiv.appendChild(category);
    titleDiv.appendChild(title);

    const inputDiv = document.createElement('div');
    inputDiv.setAttribute('class', 'd-flex flex-column align-items-start justify-content-start');

    const label = document.createElement('span');
    label.innerText = 'Num. maximo de repet.';

    const input = document.createElement('input');
    input.setAttribute('id', 'ValidExer' + x);
    input.setAttribute('class', 'input-exer text-start');
    input.setAttribute('type', 'number');
    input.setAttribute('required', true);

    inputDiv.appendChild(label);
    inputDiv.appendChild(input);

    textDiv.appendChild(titleDiv);
    textDiv.appendChild(inputDiv);

    const toggleDiv = document.createElement('div');
    toggleDiv.setAttribute('id', 'toggleExer' + x);
    toggleDiv.setAttribute('class', 'd-none mb-4');

    const button = document.createElement('button');
    button.setAttribute('id', 'btn' + x);
    // button.setAttribute('onclick', "filter(" + x + ", '" + exer.category + "', '" + exer.type + "')");
    button.setAttribute('onclick', `filter(${x} , '${exer.category}', '${exer.type}', ${exer.nivel} )`);
    button.setAttribute('class', 'btn btn-primary');
    button.setAttribute('type', 'button');
    button.innerText = 'Trocar Exercicío';

    toggleDiv.appendChild(button);

    rowDiv.appendChild(imgDiv);
    rowDiv.appendChild(textDiv);
    rowDiv.appendChild(toggleDiv);

    div.appendChild(rowDiv);

    // Adicione o elemento ao DOM
    divPai2.appendChild(div);
    x += 1
  })
  
}

function subs(id, name, category, type, img) {
  const Name = document.getElementById('ValidTitle' + id)
  const Category = document.getElementById('category' + id)
  const Img = document.getElementById('img' + id)
  const div = document.getElementById('divToggle')
  Name.innerHTML = name
  Category.innerHTML = "(" + category + " " + type + ")"
  Img.src = img

  // Esconde a div de troca de exercicio
  div.classList.remove('d-block')
  div.classList.add('d-none')

  // Esconde o button
  const btn = document.getElementById('toggleExer' + id)
  btn.classList.add('d-none')
  btn.classList.remove('d-block')

  // Zerar input
  const input = document.getElementById('ValidExer' + id)
  input.value = ''

}

function closer() {
  const divHidden = document.getElementById('divToggle')
  divHidden.classList.remove('d-block')
  divHidden.classList.add('d-none')
}

function filter(id, category, type, nivel) {
  const divHidden = document.getElementById('divToggle')
  divHidden.classList.remove('d-none')
  divHidden.classList.add('d-block')
  var filterType

  const inputValue = document.getElementById('ValidExer' + id)
  var input = parseInt(inputValue.value)

  if (nivel == undefined) {
    input == 0 ? nivel = 0 : null;

    input < 5 && input > 0 ? nivel = 0 : null;

    input > 15 && input <= 30 ? nivel = 2 : null;

    input > 30 && input <= 40 ? nivel = 3 : null;


  } else { nivel == 0 }

  // Se o nivel é passado usamos ele para configurar os exercicios anteriores e posteriores 
  if (nivel) {
    input == 0 && input > 3 ? nivel = nivel - 2 : null;

    input < 3 && input > 2 ? nivel = nivel - 1 : null;

    input >= 5 && input <= 15 ? nivel : null  // valor ser mostrado default

    input > 15 && input <= 25 ? nivel = nivel + 1 : null;

    input > 25 && input <= 40 ? nivel = nivel + 2 : null;

    nivel > 6 ? nivel = 6 : nivel = nivel

    nivel < 0 ? nivel = 0 : nivel = nivel
  }

  // if (category != null && category != "" && category != undefined) {
  //     var filterType = exercises.filter(f => f.category === category)
  // }
  // if (nivel != null && nivel >= 0 && nivel != undefined) {
  //     filterType = filterType.filter(f => f.nivel === nivel)
  // }
  // if (type != null && type != "" && type != undefined) {
  //     filterType = filterType.filter(f => f.type === type)
  // }
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

  const divheader = document.createElement('div')
  divheader.classlist = 'col-12 d-flex justify-content-between mb-5'
  divheader.style = 'border-bottom: 1px solid rgb(20, 20, 20); height: 30px !important;'

  const text = document.createElement('h4')
  text.classList = 'mb-0'
  text.innerHTML = 'Exercicios de sugestão'
  divheader.appendChild(text)

  const i = document.createElement('i')
  i.classList = 'bi bi-x-lg position-absolute m-2'
  i.style = 'color:black; font-size: large;top: 0; right: 0; cursor: pointer;'
  i.onclick = function () { closer() };
  divheader.appendChild(i)
  divPai.appendChild(divheader)

  filterType.forEach(e => {
    const div = document.createElement('div');
    div.className = 'col-lg-5 col-12 rounded-3 bg-white m-3';
    div.style.border = '1px solid rgb(20, 20, 20)';

    const h3 = document.createElement('h3');
    h3.className = 'reset';
    h3.innerText = e.name;

    const h4 = document.createElement('h4');
    h4.innerText = "(" + e.category + " " + e.type + ")";

    const imgContainer = document.createElement('div');
    imgContainer.className = 'd-flex justify-content-center';

    const img = document.createElement('img');
    img.width = 150;
    img.height = 150;
    img.src = e.url;

    const button = document.createElement('button');
    button.onclick = function () { subs(id, e.name, e.category, e.type, e.url) };
    button.className = 'btn btn-primary mt-2';
    button.innerText = 'Trocar';

    imgContainer.appendChild(img);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(imgContainer);
    div.appendChild(button);

    divPai.appendChild(div)
  })

}

function openToggleExer(id, Title, Input) {
  const input = document.getElementById('ValidExer' + id);
  const btn = document.getElementById('toggleExer' + id)

  if (input.value < 5) {
    // Mostra o botão de trocar o exercicio
    btn.classList.add('d-block')
    btn.classList.remove('d-none')
  }
  if (input.value > 4 && input.value < 16) {
    btn.classList.add('d-none')
    btn.classList.remove('d-block')
    gerarTreino(Title, Input, id)

    const divPai = document.getElementById('divToggle')
    divPai.innerHTML = ''
    if (treino.length === 8) {
      // fechar model
      const button = document.getElementById('saveTraining')
      button.setAttribute('data-bs-dismiss', 'modal')
    }
  }
  if (input.value > 15) {
    // Mostra o botão de trocar o exercicio
    btn.classList.add('d-block')
    btn.classList.remove('d-none')
  }
}

function creatStruct(id) {
  const input = document.getElementById('ValidExer' + id)
  const title = document.getElementById('ValidTitle' + id)

  input.addEventListener('blur', function () {
    if (input.value == NaN ||
      input.value == null ||
      input.value == undefined ||
      input.value == "") {

      input.classList.remove('input-exer')
      input.classList.add('input-exer-fail')
    } else {
      input.classList.remove('input-exer-fail')
      input.classList.add('input-exer')
      openToggleExer(id, title, input)
    }
  })
}

function gerarTreino(title, input, id) {
  // Cria um novo objeto com as informações do exercício
  const exer = getImgUrl(title.innerHTML)

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

function enviarTreino() {

  if (treino.length === 8) {
    const divPai = document.getElementById('trainingGenerated')
    divPai.innerHTML = ''
    treino.forEach(exer => {

      const title = document.getElementById('txtTitle')
      title.classList.remove('d-none')
      title.classList.add('d-block')

      const div = document.createElement('div');
      // adicionar as classes à div
      div.classList.add('col-lg-6', 'col-12', 'position-relative', 'rounded-3', 'p-3', 'bg-white');

      // criar o elemento h3 e adicionar o texto
      const h3 = document.createElement('h3');
      h3.classList.add('reset', 'text-center');
      h3.setAttribute('id', 'ValidTitle8');
      h3.textContent = exer.name;

      // adicionar o elemento h3 à div
      div.appendChild(h3);

      // criar o elemento div
      const div2 = document.createElement('div');
      div2.classList.add('d-flex', 'rounded-3', 'p-3', 'bg-white', 'w-100');
      div2.style.border = '1px solid rgb(20, 20, 20)';

      // criar o elemento div com a imagem e adicionar a imagem
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('d-flex', 'justify-content-center', 'img-card', 'reset-Padding');
      const img = document.createElement('img');
      img.classList.add('img-fluid', 'img-resolution');
      img.setAttribute('id', 'img1');
      img.setAttribute('width', '150');
      img.setAttribute('height', '150');
      img.setAttribute('src', exer.url);
      img.setAttribute('alt', '');
      imgDiv.appendChild(img);

      // criar o elemento div com as informações da série e adicionar as informações
      const infoDiv = document.createElement('div');
      infoDiv.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-content-center');
      infoDiv.style.width = '350px';

      const serieDiv = document.createElement('div');
      serieDiv.classList.add('d-flex', 'text-center', 'justify-content-between', 'align-items-center');

      const serieSpan1 = document.createElement('span');
      serieSpan1.textContent = 'Serie: ';

      const serieSpan2 = document.createElement('span');
      serieSpan2.textContent = exer.rept + 'x';
      serieDiv.appendChild(serieSpan1);
      serieDiv.appendChild(serieSpan2);

      const repDiv = document.createElement('div');
      repDiv.classList.add('d-flex', 'text-center', 'align-items-center', 'justify-content-between');

      const repSpan1 = document.createElement('span');
      repSpan1.textContent = 'Num de repetição: ';

      const repSpan2 = document.createElement('span');
      repSpan2.textContent = exer.count;

      repDiv.appendChild(repSpan1);
      repDiv.appendChild(repSpan2);
      const descDiv = document.createElement('div');
      descDiv.classList.add('d-flex', 'text-center', 'align-items-center', 'justify-content-between');
      const descSpan1 = document.createElement('span');
      descSpan1.textContent = 'Descanso: ';
      const descSpan2 = document.createElement('span');
      descSpan2.textContent = exer.rest + ' Minutos';
      descDiv.appendChild(descSpan1);
      descDiv.appendChild(descSpan2);
      infoDiv.appendChild(serieDiv);
      infoDiv.appendChild(repDiv);
      infoDiv.appendChild(descDiv);

      // adicionar os elementos à segunda div
      div2.appendChild(imgDiv);
      div2.appendChild(infoDiv);

      // adicionar a segunda div à primeira div
      div.appendChild(div2);
      divPai.appendChild(div);
    })
  } else {
    for (let i = 1; i < 9; i++) {
      const input = document.getElementById('ValidExer' + i)


      if (input.value == NaN ||
        input.value == null ||
        input.value == undefined ||
        input.value == "") {

        input.classList.remove('input-exer')
        input.classList.add('input-exer-fail')
      } else {
        input.classList.remove('input-exer-fail')
        input.classList.add('input-exer')
      }

    }
  }
}

