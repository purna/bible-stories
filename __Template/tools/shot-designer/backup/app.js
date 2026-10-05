
        const R = new THREE.WebGLRenderer({
            antialias: true
        });
        R.setPixelRatio(Math.min(devicePixelRatio, 2));
        document.getElementById('vp').appendChild(R.domElement);
        const S = new THREE.Scene(),
            SKY = 0xf4cf98;
        S.background = new THREE.Color(SKY);
        S.fog = new THREE.Fog(SKY, 60, 190);
        const C = new THREE.PerspectiveCamera(55, 1, .1, 400);
        const M = c => new THREE.MeshStandardMaterial({
            color: c,
            flatShading: true,
            roughness: 1
        });
        const add = (g, c, x, y, z, p) => {
            const m = new THREE.Mesh(g, M(c));
            m.position.set(x, y, z);
            (p || S).add(m);
            return m
        };
        S.add(new THREE.HemisphereLight(0xfff0d0, 0x9a6b3a, .75));
        const sun = new THREE.DirectionalLight(0xffe2b0, 1.1);
        sun.position.set(-30, 40, 10);
        S.add(sun);
        // sun disc
        const sd = new THREE.Mesh(new THREE.IcosahedronGeometry(7, 0), new THREE.MeshBasicMaterial({
            color: 0xfff3c4,
            fog: false
        }));
        sd.position.set(-40, 32, -150);
        S.add(sd);
        // jittered terrain
        function terr(w, d, cx, cz, y, j, c, sg) {
            const g = new THREE.PlaneGeometry(w, d, sg, sg);
            g.rotateX(-Math.PI / 2);
            const p = g.attributes.position;
            for (let i = 0; i < p.count; i++) p.setY(i, (Math.random() - .5) * j);
            g.computeVertexNormals();
            return add(g, c, cx, y, cz)
        }
        terr(240, 60, 0, 20, -.6, .8, 0xe3b26a, 24); // near bank
        terr(260, 110, 0, -70, -.6, 1.4, 0xdfa75c, 30); // desert far side
        terr(240, 6, 0, -11, -.2, .4, 0x7d9a3c, 40); // green strip
        // water
        const wg = new THREE.PlaneGeometry(240, 20, 60, 10);
        wg.rotateX(-Math.PI / 2);
        const wm = new THREE.MeshStandardMaterial({
            color: 0x2a8fb0,
            flatShading: true,
            roughness: .35,
            metalness: .1
        });
        const W = new THREE.Mesh(wg, wm);
        W.position.set(0, -.4, 0);
        S.add(W);
        const w0 = Array.from(wg.attributes.position.array);
        // dunes
        [
            [-45, -40, 14, 7],
            [40, -30, 16, 6],
            [-15, -70, 22, 10],
            [60, -65, 20, 9],
            [-70, -60, 18, 8]
        ].forEach(([x, z, r, h]) => {
            const d = add(new THREE.ConeGeometry(r, h, 7), 0xd39a52, x, h / 2 - .5, z);
            d.rotation.y = Math.random() * 3
        });
        // pyramids
        function pyr(x, z, s, c) {
            const m = add(new THREE.ConeGeometry(s * .7071, s * .65, 4), c, x, s * .325, z);
            m.rotation.y = Math.PI / 4
        }
        pyr(26, -48, 30, 0xf0d391);
        pyr(48, -58, 22, 0xe9c880);
        pyr(6, -66, 15, 0xeecf8d);
        // palm
        function palm(x, z, s = 1) {
            const g = new THREE.Group();
            g.position.set(x, 0, z);
            g.scale.setScalar(s);
            S.add(g);
            const t = add(new THREE.CylinderGeometry(.18, .3, 4.5, 5), 0x7a4f2b, 0, 2.2, 0, g);
            t.rotation.z = (Math.random() - .5) * .25;
            for (let i = 0; i < 7; i++) {
                const l = add(new THREE.ConeGeometry(.35, 3, 3), i % 2 ? 0x4f8a2e : 0x5fa036, 0, 4.5, 0, g);
                l.geometry.translate(0, 1.5, 0);
                l.rotation.set(0, i * Math.PI * 2 / 7, 0);
                l.rotation.z = 1.15;
                l.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), i * .9);
            }
            return g
        }
        // palace
        const P = new THREE.Group();
        P.position.set(-14, 0, -27);
        S.add(P);
        const stone = 0xf1dcae,
            trim = 0x2fa4a8,
            red = 0xc4462b,
            gold = 0xe3a72f;
        add(new THREE.BoxGeometry(34, 1, 14), 0xe2c58e, 0, .1, 0, P);
        add(new THREE.BoxGeometry(30, 4.2, 9), stone, 0, 2.7, -1.5, P);
        add(new THREE.BoxGeometry(30.4, .4, 9.4), trim, 0, 4.9, -1.5, P);
        add(new THREE.BoxGeometry(30.6, .25, 9.6), red, 0, 5.25, -1.5, P);
        add(new THREE.BoxGeometry(10, 2.2, 6), stone, 0, 6.4, -2.5, P); // upper hall
        add(new THREE.BoxGeometry(10.4, .3, 6.4), gold, 0, 7.6, -2.5, P);
        // pylons
        [-5, 5].forEach(x => {
            const t = add(new THREE.CylinderGeometry(2.4, 3.6, 11, 4), stone, x, 6.2, 4, P);
            t.rotation.y = Math.PI / 4;
            t.scale.set(1, 1, .7);
            add(new THREE.BoxGeometry(4.4, .4, 3.4), gold, x, 11.9, 4, P);
            add(new THREE.BoxGeometry(.9, 6, .1), trim, x, 6.4, 5.6, P);
            add(new THREE.BoxGeometry(.9, .9, .12), red, x, 9.5, 5.62, P);
        });
        add(new THREE.BoxGeometry(6, 2.2, 3), 0x3a2a1c, 0, 1.9, 4.2, P); // gate
        add(new THREE.BoxGeometry(6.6, .6, 3.4), trim, 0, 3.4, 4, P);
        // colonnade
        for (let i = -5; i <= 5; i++) add(new THREE.CylinderGeometry(.35, .42, 4.2, 6), i % 2 ? 0xe6c88e : stone, i * 2.6, 2.7, 3, P).visible = Math.abs(i) > 2;
        // statues
        [-9, 9].forEach(x => {
            add(new THREE.BoxGeometry(1.6, 3.2, 1.6), 0xd9b877, x, 2, 7.5, P);
            add(new THREE.OctahedronGeometry(.9, 0), gold, x, 4.2, 7.5, P)
        });
        // stairs
        for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(7 - i * .4, .3, 1), 0xe8cf9b, 0, .5 + i * .05, 8.2 - i * .6, P);
        [
            [-30, 6],
            [-24, 8.5],
            [-6, 8],
            [4, 7]
        ].forEach(([x, z]) => palm(P.position.x + x, P.position.z + z, 1.1 + Math.random() * .4));
        // far bank palms & reeds
        for (let i = 0; i < 22; i++) palm(-95 + i * 9 + Math.random() * 5, -10.5 - Math.random() * 3, .8 + Math.random() * .5);
        for (let i = 0; i < 70; i++) {
            const x = -90 + Math.random() * 180,
                z = (Math.random() < .5 ? -9.2 : 9.5) + Math.random() * 1.2;
            add(new THREE.ConeGeometry(.12, 1.6 + Math.random(), 3), 0x8faa3a, x, .7, z)
        }
        // near bank palms
        [
            [-16, 20],
            [-3, 26],
            [14, 18],
            [26, 24],
            [-32, 16]
        ].forEach(([x, z]) => palm(x, z, 1.3 + Math.random() * .4));
        // felucca
        function boat(x, z, s, col) {
            const b = new THREE.Group();
            b.position.set(x, -.2, z);
            b.scale.setScalar(s);
            S.add(b);
            add(new THREE.BoxGeometry(5, .6, 1.5), 0x7a4a26, 0, .3, 0, b);
            const bow = add(new THREE.ConeGeometry(.75, 1.6, 4), 0x7a4a26, 3.2, .5, 0, b);
            bow.rotation.z = -Math.PI / 2;
            bow.rotation.x = Math.PI / 4;
            add(new THREE.CylinderGeometry(.06, .08, 6, 5), 0x4a2c14, 0, 3.4, 0, b);
            const sh = new THREE.Shape();
            sh.moveTo(0, 0);
            sh.lineTo(-3.4, 0);
            sh.lineTo(0, 5.4);
            const sail = add(new THREE.ShapeGeometry(sh), col, .2, .9, .05, b);
            sail.material.side = THREE.DoubleSide;
            add(new THREE.CylinderGeometry(.04, .04, 4, 4), 0x4a2c14, -1.6, 1.2, 0, b).rotation.z = Math.PI / 2;
            return b
        }
        const boats = [
            [boat(-20, 2, 1.2, 0xfaf0dc), 1.6],
            [boat(25, -3.5, .9, 0xf5e2b8), -1.1],
            [boat(0, 4.5, .7, 0xfff6e6), .9]
        ];
        boats[1][0].rotation.y = Math.PI;
        // ---- camera moves ----
        const V3 = THREE.Vector3,
            Y = new V3(0, 1, 0),
            c0 = new V3(-6, 4, -24),
            D2R = Math.PI / 180,
            cl = x => Math.min(1, Math.max(0, x)),
            L = (a, u) => a[0] + (a[1] - a[0]) * u;
        const EA = {
            io: u => u * u * (3 - 2 * u),
            in: u => u * u,
            out: u => 1 - (1 - u) * (1 - u),
            lin: u => u,
            ramp: u => u < .5 ? 4 * u * u * u : 1 - Math.pow(2 - 2 * u, 3) / 2
        };
        const PL = {
            r: [24, 44]
        },
            PS = {
                r: [44, 24]
            },
            HH = {
                s: .25,
                sf: 6
            };
        const CATS = [
            ['Cinematic', [
                ['Dolly Shot', {
                    r: [46, 24]
                }],
                ['Reverse Dolly Shot', {
                    r: [24, 46]
                }],
                ['Birds Eye Twist', {
                    h: [8, 60],
                    r: [40, 4],
                    o: [0, 90]
                }],
                ['Crane Shot Side', {
                    a: [-35, -35],
                    h: [3, 24]
                }],
                ['Crane Shot Sweep', {
                    a: [-50, 30],
                    h: [3, 26]
                }],
                ['360 Pan + Tilt', {
                    y: [0, 360],
                    p: [-15, 20],
                    d: 10
                }],
                ['180 Degree Pan', {
                    y: [-90, 90],
                    d: 8
                }],
                ['90 Degree Pan', {
                    y: [-45, 45]
                }],
                ['Track Back Pan Down', {
                    r: [24, 48],
                    p: [10, -22]
                }],
                ['Track Back Pan Up', {
                    r: [24, 48],
                    p: [-15, 10]
                }],
                ['Push Forward Pan Down', {
                    r: [48, 24],
                    p: [5, -22]
                }],
                ['Push Forward Pan Up', {
                    r: [48, 24],
                    p: [-12, 10]
                }],
                ['Pan Back + Flip', {
                    r: [24, 50],
                    o: [0, 180]
                }],
                ['Pan Back + Flip (Handheld)', {
                    r: [24, 50],
                    o: [0, 180],
                    ...HH
                }],
                ['J Move Up', {
                    r: [44, 30],
                    h: [4, 28],
                    e: 'in'
                }],
                ['J Move Down', {
                    r: [30, 44],
                    h: [28, 4],
                    e: 'out'
                }],
                ['L Move Up', {
                    r: [44, 26],
                    h: [5, 26],
                    ph: 1,
                    d: 8
                }],
                ['L Move Down', {
                    r: [26, 44],
                    h: [26, 5],
                    ph: 2,
                    d: 8
                }],
                ['Spiral Up', {
                    a: [0, 270],
                    h: [4, 28],
                    r: [44, 30],
                    d: 9
                }],
                ['Spiral Down', {
                    a: [0, 270],
                    h: [28, 4],
                    r: [30, 44],
                    d: 9
                }],
                ['360 Track', {
                    a: [0, 360],
                    d: 12,
                    e: 'lin'
                }],
                ['Slide Right', {
                    x: [-18, 18]
                }],
                ['Slide Left', {
                    x: [18, -18]
                }],
                ['Slide Up', {
                    v: [-4, 14]
                }],
                ['Slide Down', {
                    v: [14, -4]
                }],
                ['Under To Above', {
                    h: [.3, 30],
                    r: [42, 26]
                }]
            ]],
            ['FPV', [
                ['Automatic Gun Fire', {
                    s: .5,
                    sf: 22,
                    r: [36, 34],
                    d: 3
                }],
                ['Base Jump FPV', {
                    h: [45, 3],
                    r: [75, 30],
                    p: [-25, -5],
                    s: .4,
                    sf: 14,
                    e: 'in',
                    d: 7
                }],
                ['Bleeding Out', {
                    s: .12,
                    o: [0, 25],
                    f: [55, 40],
                    p: [0, -25],
                    e: 'in',
                    d: 8
                }],
                ['Explosion', {
                    s: 2.4,
                    sf: 18,
                    sd: 4,
                    d: 3
                }],
                ['Fall Backwards', {
                    p: [0, 60],
                    h: [7, 1],
                    o: [0, -10],
                    e: 'in',
                    d: 3
                }],
                ['Flinch', {
                    s: 1.6,
                    sf: 14,
                    sd: 8,
                    d: 1.6
                }],
                ['Look Around', {
                    y: [-45, 45],
                    p: [-8, 8],
                    s: .05,
                    d: 8
                }],
                ['Static Handheld Subtle', {
                    s: .12,
                    sf: 5,
                    d: 6
                }],
                ['Turn, Look Up', {
                    y: [-60, 0],
                    p: [-5, 38],
                    d: 5
                }],
                ['Jet Pass 01', {
                    x: [-140, 140],
                    tr: 1,
                    r: [30, 30],
                    h: [9, 9],
                    o: [-10, 10],
                    s: .3,
                    sf: 16,
                    e: 'lin',
                    d: 3
                }],
                ['Jet Pass 02', {
                    x: [140, -140],
                    tr: 1,
                    r: [26, 26],
                    h: [14, 10],
                    o: [10, -10],
                    s: .3,
                    sf: 16,
                    e: 'lin',
                    d: 3
                }]
            ]],
            ['Pans', [
                ['Pan Down', {
                    p: [15, -15]
                }],
                ['Pan Up', {
                    p: [-15, 15]
                }],
                ['Pan Left', {
                    y: [-25, 25]
                }],
                ['Pan Left Handheld', {
                    y: [-25, 25],
                    ...HH
                }],
                ['Pan Right', {
                    y: [25, -25]
                }],
                ['Pan Right Handheld', {
                    y: [25, -25],
                    ...HH
                }],
                ['Scenic Pan Left', {
                    y: [-40, 40],
                    f: [45, 45],
                    d: 12
                }],
                ['Scenic Pan Right', {
                    y: [40, -40],
                    f: [45, 45],
                    d: 12
                }]
            ]],
            ['Speed Ramps', [
                ['180 Degree Spin (Anti-Clockwise)', {
                    a: [0, -180],
                    e: 'ramp',
                    d: 7
                }],
                ['180 Degree Spin (Clockwise)', {
                    a: [0, 180],
                    e: 'ramp',
                    d: 7
                }],
                ['Contra-Zoom', {
                    r: [26, 60],
                    f: [80, 40],
                    e: 'ramp'
                }],
                ['Crane Shot Down', {
                    h: [28, 3],
                    e: 'ramp'
                }],
                ['Crane Shot Up', {
                    h: [3, 28],
                    e: 'ramp'
                }],
                ['Move Down', {
                    v: [8, -8],
                    e: 'ramp'
                }],
                ['Move Up', {
                    v: [-8, 8],
                    e: 'ramp'
                }],
                ['Move Left', {
                    x: [18, -18],
                    e: 'ramp'
                }],
                ['Move Right', {
                    x: [-18, 18],
                    e: 'ramp'
                }],
                ['Pull Back', {
                    r: [24, 50],
                    e: 'ramp'
                }],
                ['Pull Pan Down', {
                    r: [24, 50],
                    p: [8, -20],
                    e: 'ramp'
                }],
                ['Pull Pan Up', {
                    r: [24, 50],
                    p: [-10, 14],
                    e: 'ramp'
                }],
                ['Pull Rise', {
                    r: [26, 50],
                    h: [4, 26],
                    e: 'ramp'
                }],
                ['Push Down', {
                    r: [50, 26],
                    h: [26, 6],
                    e: 'ramp'
                }],
                ['Push In', {
                    r: [50, 24],
                    e: 'ramp'
                }],
                ['Push Pan Down', {
                    r: [50, 24],
                    p: [6, -20],
                    e: 'ramp'
                }],
                ['Push Pan Up', {
                    r: [50, 24],
                    p: [-10, 12],
                    e: 'ramp'
                }],
                ['Twist In', {
                    r: [50, 24],
                    o: [0, 45],
                    e: 'ramp'
                }],
                ['Twist Out', {
                    r: [24, 50],
                    o: [45, 0],
                    e: 'ramp'
                }]
            ]],
            ['Pushes + Pulls', [
                ['Fast Pull', {
                    ...PL,
                    d: 2.5
                }],
                ['Long Pull', {
                    r: [16, 70],
                    d: 9
                }],
                ['Medium Pull', {
                    ...PL,
                    d: 6
                }],
                ['Pull Handheld', {
                    ...PL,
                    ...HH
                }],
                ['Slow Pull', {
                    ...PL,
                    d: 12
                }],
                ['Pull Rise'],
                ['Pull to Birds Eye', {
                    r: [36, 4],
                    h: [6, 55],
                    d: 8
                }],
                ['Twist Pull', {
                    ...PL,
                    o: [0, 60]
                }],
                ['Fast Push', {
                    ...PS,
                    d: 2.5
                }],
                ['Long Push', {
                    r: [70, 16],
                    d: 9
                }],
                ['Medium Push', {
                    ...PS,
                    d: 6
                }],
                ['Push Handheld', {
                    ...PS,
                    ...HH
                }],
                ['Slow Push', {
                    ...PS,
                    d: 12
                }],
                ['Push Sink', {
                    r: [44, 26],
                    h: [14, 2]
                }],
                ['Twist Push', {
                    ...PS,
                    o: [0, -60]
                }],
                ['Push To Sky', {
                    r: [44, 28],
                    p: [0, 45]
                }],
                ['Push To Ground', {
                    r: [44, 28],
                    p: [0, -30],
                    h: [10, 3]
                }]
            ]],
            ['Flyovers', [
                ['Flyover Zoom', {
                    r: [80, 10],
                    h: [40, 14],
                    f: [45, 70],
                    d: 9
                }],
                ['Helicopter Flyover_001', {
                    a: [-70, 70],
                    r: [50, 36],
                    h: [30, 22],
                    s: .15,
                    sf: 7,
                    d: 10
                }],
                ['Helicopter Flyover_002', {
                    a: [60, -120],
                    r: [56, 30],
                    h: [24, 34],
                    s: .15,
                    sf: 7,
                    d: 10
                }],
                ['Slow Flyover', {
                    r: [70, 14],
                    h: [26, 16],
                    d: 16
                }],
                ['Mini Spy Drone', {
                    a: [-20, 40],
                    h: [3, 5],
                    r: [22, 12],
                    s: .1,
                    sf: 3,
                    dr: .3,
                    f: [75, 75],
                    d: 10
                }]
            ]],
            ['Zooms', [
                ['Contra-Zoom'],
                ['Contra-Zoom 2', {
                    r: [60, 26],
                    f: [40, 80]
                }],
                ['Fast Zoom', {
                    f: [55, 20],
                    d: 2
                }],
                ['Handheld Zoom In', {
                    f: [55, 25],
                    ...HH
                }],
                ['Handheld Zoom Out', {
                    f: [25, 55],
                    ...HH
                }],
                ['Slow Zoom', {
                    f: [55, 25],
                    d: 12
                }],
                ['Twist Zoom', {
                    f: [55, 22],
                    o: [0, 45]
                }],
                ['Zoom In Pan Left', {
                    f: [60, 24],
                    y: [-15, 10]
                }],
                ['Zoom In Pan Right', {
                    f: [60, 24],
                    y: [15, -10]
                }],
                ['Zoom Out Pan Up', {
                    f: [22, 60],
                    p: [-10, 15]
                }],
                ['Zoom In Pan Down', {
                    f: [60, 24],
                    p: [10, -15]
                }],
                ['Sinister Twist Zoom In', {
                    f: [70, 20],
                    o: [0, -30],
                    e: 'in'
                }],
                ['Sinister Twist Zoom Out', {
                    f: [20, 70],
                    o: [-30, 0],
                    e: 'out'
                }]
            ]],
            ['Chaotic', [
                ['Backwards Running', {
                    r: [26, 50],
                    bob: .35,
                    bf: 11,
                    s: .2,
                    sf: 11
                }],
                ['Drunk Cam', {
                    dr: 1,
                    r: [40, 34],
                    s: .05,
                    d: 10
                }],
                ['Static Handheld Subtle'],
                ['Forwards Running', {
                    r: [50, 24],
                    bob: .35,
                    bf: 11,
                    s: .2,
                    sf: 11
                }],
                ['Sideways Running', {
                    x: [-25, 25],
                    bob: .35,
                    bf: 11,
                    s: .2,
                    sf: 11,
                    e: 'lin'
                }],
                ['Traffic Weaving', {
                    r: [50, 18],
                    wv: 5,
                    s: .15,
                    sf: 10,
                    e: 'lin',
                    d: 8
                }],
                ['Walking', {
                    r: [46, 32],
                    bob: .15,
                    bf: 5.5,
                    s: .05,
                    e: 'lin',
                    d: 9
                }],
                ['Missile Strike', {
                    r: [90, 4],
                    h: [40, 1],
                    o: [0, 180],
                    s: .3,
                    sf: 20,
                    e: 'in',
                    d: 4
                }],
                ['Curved Missile Strike', {
                    a: [80, 0],
                    r: [100, 6],
                    h: [40, 1],
                    o: [0, 360],
                    s: .3,
                    sf: 20,
                    e: 'in',
                    d: 4
                }],
                ['Space Camera Floating', {
                    a: [0, 25],
                    h: [10, 18],
                    r: [60, 55],
                    o: [0, 12],
                    dr: .3,
                    d: 14
                }],
                ['Space Camera Floating 2', {
                    a: [0, -30],
                    h: [20, 8],
                    r: [55, 62],
                    o: [0, -15],
                    dr: .4,
                    d: 14
                }],
                ['Space Camera Floating 3', {
                    a: [10, 40],
                    h: [6, 30],
                    r: [50, 66],
                    o: [5, 20],
                    dr: .5,
                    d: 14
                }],
                ['Spinning In Space', {
                    a: [0, 90],
                    o: [0, 720],
                    h: [30, 40],
                    e: 'lin',
                    d: 10
                }],
                ['Fast Car Flyby (left to right)', {
                    x: [-70, 70],
                    tr: 1,
                    r: [22, 22],
                    h: [1.5, 1.5],
                    e: 'lin',
                    d: 2.5
                }],
                ['Fast Car Flyby (right to left)', {
                    x: [70, -70],
                    tr: 1,
                    r: [22, 22],
                    h: [1.5, 1.5],
                    e: 'lin',
                    d: 2.5
                }],
                ['Handheld Transition Right', {
                    x: [-6, 26],
                    y: [0, -25],
                    o: [0, 8],
                    s: .5,
                    sf: 12,
                    e: 'ramp',
                    d: 2
                }],
                ['Handheld Transition Left', {
                    x: [6, -26],
                    y: [0, 25],
                    o: [0, -8],
                    s: .5,
                    sf: 12,
                    e: 'ramp',
                    d: 2
                }]
            ]]
        ];
        const reg = {};
        const $ = i => document.getElementById(i),
            sn = (t, f, s = 0) => Math.sin(t * f + s);

        function apply(m, u, t) {
            const e = EA[m.e || 'io'],
                ua = e(m.ph == 2 ? cl(2 * u - 1) : m.ph == 1 ? cl(2 * u) : u),
                ub = e(m.ph == 2 ? cl(2 * u) : m.ph == 1 ? cl(2 * u - 1) : u),
                uu = e(u);
            const a = L(m.a || [0, 0], ua) * D2R,
                r = L(m.r || [40, 40], ua),
                h = L(m.h || [7, 7], ub);
            let x = m.x ? L(m.x, uu) : 0,
                v = m.v ? L(m.v, uu) : 0;
            const sa = (m.s || 0) * Math.exp(-(m.sd || 0) * u),
                sf = m.sf || 9,
                nz = k => sa * (sn(t, sf, k) + .6 * sn(t, sf * 2.3, k * 1.7) + .4 * sn(t, sf * .43, k * 2.9));
            x += m.wv ? sn(t, 2.2) * m.wv : 0;
            const pos = new V3(c0.x + Math.sin(a) * r + x + nz(1) * .25, h + v + (m.bob ? sn(t, m.bf) * m.bob : 0) + nz(2) * .25, c0.z + Math.cos(a) * r);
            const look = new V3(c0.x + (m.tr ? 0 : x), c0.y + (m.tr ? 0 : v), c0.z);
            let yw = m.y ? L(m.y, uu) : 0,
                pt = m.p ? L(m.p, uu) : 0,
                rl = m.o ? L(m.o, uu) : 0;
            if (m.dr) {
                yw += m.dr * (12 * sn(t, .9) + 4 * sn(t, 2.3));
                pt += m.dr * 6 * sn(t, 1.3);
                rl += m.dr * 10 * sn(t, .7)
            }
            if (m.wv) rl += Math.cos(2.2 * t) * m.wv * 1.5;
            yw += nz(3) * 8;
            pt += nz(4) * 8;
            rl += nz(5) * 6;
            const d = look.sub(pos);
            d.applyAxisAngle(Y, yw * D2R);
            d.applyAxisAngle(new V3().crossVectors(d, Y).normalize(), pt * D2R);
            C.position.copy(pos);
            C.up.set(0, 1, 0);
            C.lookAt(pos.clone().add(d));
            C.rotateZ(rl * D2R);
            const f = L(m.f || [55, 55], uu);
            if (C.fov != f) {
                C.fov = f;
                C.updateProjectionMatrix()
            }
        }

        function free(t) {
            const a = az + (idle > 400 ? Math.sin(t * .15) * .25 : 0);
            C.position.set(tx + Math.sin(a) * Math.sin(pol) * dist, ty + Math.cos(pol) * dist, tz + Math.cos(a) * Math.sin(pol) * dist);
            C.up.set(0, 1, 0);
            C.lookAt(tx, ty, tz);
            if (C.fov != 55) {
                C.fov = 55;
                C.updateProjectionMatrix()
            }
        }
        let lt = 0;
        const vp = $('vp'),
            r3 = x => Math.round(x * 1e4) / 1e4,
            V = a => new V3(...a),
            Q = a => new THREE.Quaternion(...a),
            mat = p => new THREE.Matrix4().compose(V(p.p), Q(p.q), new V3(1, 1, 1));
        const newClip = m => ({
            m: m || 'Dolly Shot',
            sp: 1,
            st: null,
            en: null,
            b0: 0,
            b1: 0
        });
        let seq = [newClip()],
            sel = 0,
            ed = 'st',
            tm = 'translate',
            span = null,
            mode = false,
            ct = 0,
            playing = false,
            anch = [],
            durs = [],
            tot = 1,
            hk = -1,
            tcDrag = false,
            job = null,
            selT = -1,
            sts = [0];
        const fit = () => {
            const w = vp.clientWidth & ~1,
                h = vp.clientHeight & ~1;
            R.setSize(w, h);
            C.aspect = w / h;
            C.updateProjectionMatrix();
            const pr = R.getPixelRatio();
            rtA.setSize(w * pr, h * pr);
            rtB.setSize(w * pr, h * pr);
            CA.aspect = CB.aspect = w / h;
            CA.updateProjectionMatrix();
            CB.updateProjectionMatrix()
        };
        new ResizeObserver(fit).observe(vp);
        const bez = (k, x) => {
            let lo = 0,
                hi = 1,
                t = x;
            for (let i = 0; i < 24; i++) {
                t = (lo + hi) / 2;
                const X = 3 * (1 - t) * (1 - t) * t * k[0] + 3 * (1 - t) * t * t * k[2] + t * t * t;
                if (X < x) lo = t;
                else hi = t
            }
            return 3 * (1 - t) * (1 - t) * t * k[1] + 3 * (1 - t) * t * t * k[3] + t * t * t
        };

        function pose(c, u, t, an) {
            let m = reg[c.m];
            if (c.cv) {
                m = {
                    ...m,
                    e: 'lin'
                };
                u = bez(c.cv, u)
            }
            apply(m, 0, 0);
            C.updateMatrix();
            const i0 = C.matrix.clone().invert();
            apply(m, u, t);
            C.updateMatrix();
            if (an) an.clone().multiply(i0).multiply(C.matrix).decompose(C.position, C.quaternion, C.scale);
            if (c.en) {
                const w = EA.io(u);
                C.position.lerp(V(c.en.p), w);
                C.quaternion.slerp(Q(c.en.q), w);
                C.fov = L([C.fov, c.en.f], w);
                C.updateProjectionMatrix()
            }
            C.scale.set(1, 1, 1)
        }
        const withCam = fn => {
            const p = C.position.clone(),
                q = C.quaternion.clone(),
                f = C.fov;
            fn();
            C.position.copy(p);
            C.quaternion.copy(q);
            C.fov = f;
            C.updateProjectionMatrix()
        };
        const build = (ids, chain) => {
            const an = [];
            ids.forEach((i, k) => {
                const c = seq[i];
                an[k] = c.st ? mat(c.st) : chain && k > 0 && !trL(ids[k - 1]) ? (pose(seq[ids[k - 1]], 1, 0, an[k - 1]), C.updateMatrix(), C.matrix.clone()) : null
            });
            return an
        };
        const dur = c => reg[c.m].d / c.sp,
            trL = i => {
                const c = seq[i],
                    n = seq[i + 1];
                return c && n && c.tr && c.tr.type != 'none' ? Math.min(c.tr.len, .9 * Math.min(dur(c), dur(n))) : 0
            };
        const starts = (ids, ch) => {
            let a = 0;
            return ids.map(i => {
                const o = a;
                a += dur(seq[i]) - (ch ? trL(i) : 0);
                return o
            })
        },
            offs = () => starts(seq.map((_, i) => i), true),
            total = () => {
                const o = offs(),
                    l = seq.length - 1;
                return o[l] + dur(seq[l])
            };

        function rebuild(all) {
            mode = all;
            span = all ? seq.map((_, i) => i) : [sel];
            durs = span.map(i => dur(seq[i]));
            sts = starts(span, all);
            tot = sts[sts.length - 1] + durs[durs.length - 1];
            withCam(() => anch = build(span, all))
        }
        const play = all => {
            rebuild(all);
            ct = 0;
            hk = -1;
            playing = true;
            sync()
        },
            freeUp = () => {
                span = null;
                playing = false
            };
        const seek = g => {
            rebuild(true);
            ct = Math.max(0, Math.min(tot, g));
            playing = false;
            hk = -1;
            sync()
        };
        // framing
        const F = {
            p: new V3(),
            q: new THREE.Quaternion(),
            f: 55
        };
        let view = 'frame',
            fd = null,
            rep;
        const aux = new THREE.Group(),
            pl = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({
                color: 0xffffff,
                fog: false
            })),
            mk = [0x4caf50, 0xe53935].map(c => new THREE.Mesh(new THREE.SphereGeometry(.7, 8, 6), new THREE.MeshBasicMaterial({
                color: c,
                fog: false
            })));
        aux.add(pl, ...mk);
        S.add(aux);

        function refreshF(place) {
            const c = seq[sel];
            if (!c) return;
            withCam(() => {
                const an = build(seq.map((_, i) => i), true)[sel],
                    pts = [];
                for (let i = 0; i <= 40; i++) {
                    pose(c, i / 40, 0, an);
                    pts.push(C.position.clone())
                }
                pl.geometry.setFromPoints(pts);
                mk[0].position.copy(pts[0]);
                mk[1].position.copy(pts[40]);
                if (place) {
                    pose(c, ed == 'st' ? 0 : 1, 0, an);
                    F.p.copy(C.position);
                    F.q.copy(C.quaternion);
                    F.f = C.fov
                }
            })
        }

        function commit() {
            const c = seq[sel],
                was = c[ed];
            c[ed] = {
                p: F.p.toArray().map(r3),
                q: F.q.toArray().map(r3),
                f: r3(F.f)
            };
            refreshF(false);
            if (!was) sync()
        }
        const mv = (x, y, z) => {
            const ax = (a, k) => new V3(...a).applyQuaternion(F.q).multiplyScalar(k);
            F.p.add(ax([1, 0, 0], x)).add(ax([0, 1, 0], y)).add(ax([0, 0, -1], z));
            commit()
        };
        const rot = (y, p) => {
            F.q.premultiply(new THREE.Quaternion().setFromAxisAngle(Y, y * D2R));
            F.q.multiply(new THREE.Quaternion().setFromAxisAngle(new V3(1, 0, 0), p * D2R));
            commit()
        };
        const zm = k => {
            F.f = Math.min(80, Math.max(15, F.f * k));
            commit()
        };
        const acts = {
            mL: () => mv(-1.5, 0, 0),
            mR: () => mv(1.5, 0, 0),
            mU: () => mv(0, 1.5, 0),
            mD: () => mv(0, -1.5, 0),
            mI: () => mv(0, 0, 3),
            mO: () => mv(0, 0, -3),
            rL: () => rot(3, 0),
            rR: () => rot(-3, 0),
            rU: () => rot(0, 3),
            rD: () => rot(0, -3),
            zI: () => zm(.95),
            zO: () => zm(1.05)
        };
        $('fg').onpointerdown = e => {
            const k = e.target.dataset.k;
            if (!k) return;
            freeUp();
            acts[k]();
            clearInterval(rep);
            rep = setInterval(acts[k], 70)
        };
        addEventListener('pointerup', () => {
            clearInterval(rep);
            fd = null
        });
        R.domElement.addEventListener('pointerdown', e => {
            if (!span && view == 'frame') fd = [e.clientX, e.clientY]
        });
        addEventListener('pointermove', e => {
            if (!fd) return;
            const dx = e.clientX - fd[0],
                dy = e.clientY - fd[1],
                h = vp.clientHeight;
            fd = [e.clientX, e.clientY];
            if (tm == 'rotate') rot(dx * C.fov / h, dy * C.fov / h);
            else {
                const w = 2 * Math.tan(C.fov * D2R / 2) * 30 / h;
                mv(-dx * w, dy * w, 0)
            }
        });
        R.domElement.addEventListener('wheel', e => {
            if (!span && view == 'frame') zm(1 + e.deltaY * .001)
        }, {
            passive: true
        });

        function toOrbit() {
            const d = new V3(),
                p = C.position;
            C.getWorldDirection(d);
            dist = 30;
            tx = p.x + d.x * dist;
            ty = p.y + d.y * dist;
            tz = p.z + d.z * dist;
            az = Math.atan2(p.x - tx, p.z - tz);
            pol = Math.min(1.55, Math.max(.2, Math.acos((p.y - ty) / dist)));
            idle = 0
        }
        $('al').onclick = () => {
            F.p.copy(C.position);
            F.q.copy(C.quaternion);
            F.f = C.fov;
            view = 'frame';
            commit();
            sync()
        };

        function cam(t) {
            const dt = t - lt;
            lt = t;
            const st = R.domElement.style,
                fr = !span && view == 'frame';
            tcDrag = fr;
            $('frm').style.display = $('fg').style.display = fr ? 'flex' : 'none';
            $('al').hidden = !!span || view != 'explore';
            job = null;
            aux.visible = !span && view == 'explore' && $('shp').checked;
            let g = offs()[sel] + (ed == 'en' ? dur(seq[sel]) : 0);
            if (span) {
                if (playing) {
                    ct += dt;
                    if (ct >= tot) {
                        if ($('lp').checked) ct %= tot;
                        else {
                            ct = tot;
                            playing = false;
                            sync()
                        }
                    }
                }
                let act = [];
                span.forEach((_, k) => {
                    if (ct >= sts[k] && ct < sts[k] + durs[k]) act.push(k)
                });
                if (!act.length) act = [span.length - 1];
                const P = k => {
                    const u = cl((ct - sts[k]) / durs[k]);
                    pose(seq[span[k]], u, t, anch[k])
                },
                    kk = act[act.length - 1];
                let cb = kk;
                if (act.length > 1 && trL(span[act[0]])) {
                    const kA = act[0],
                        pr = cl((ct - sts[kk]) / trL(span[kA]));
                    P(kA);
                    snap(CA);
                    P(kk);
                    snap(CB);
                    job = {
                        tr: seq[span[kA]].tr,
                        p: pr
                    };
                    cb = pr > .5 ? kk : kA
                } else P(kk);
                const c = seq[span[cb]],
                    b = L([c.b0, c.b1], EA.io(cl((ct - sts[cb]) / durs[cb])));
                st.filter = b > .1 ? `blur(${b}px)` : '';
                g = mode ? ct : offs()[span[0]] + ct;
                if (kk != hk) {
                    hk = kk;
                    if (mode && sel != span[kk]) {
                        sel = span[kk];
                        sync()
                    }
                }
            } else if (fr) {
                const w = vp.clientWidth,
                    h = vp.clientHeight,
                    q = Math.min(.62, .9 * w / (h * 16 / 9)),
                    c = seq[sel],
                    b = c[ed == 'st' ? 'b0' : 'b1'];
                C.position.copy(F.p);
                C.quaternion.copy(F.q);
                C.fov = 2 * Math.atan(Math.tan(F.f * D2R / 2) / q) / D2R;
                C.updateProjectionMatrix();
                st.filter = b > .1 ? `blur(${b}px)` : '';
                const fh = h * q,
                    fw = fh * 16 / 9,
                    fs = $('frm').style;
                fs.width = fw + 'px';
                fs.height = fh + 'px';
                fs.left = (w - fw) / 2 + 'px';
                fs.top = (h - fh) / 2 + 'px'
            } else {
                free(t);
                st.filter = ''
            }
            $('ph').style.left = g / total() * 100 + '%';
            $('tcd').textContent = fmt(g)
        }
        // transitions
        const TRN = [
            ['none', 'None (cut)', []],
            ['dissolve', 'Cross dissolve', ['spd']],
            ['dip', 'Dip to colour', ['col', 'op', 'spd']],
            ['flash', 'Flash (additive)', ['col', 'op', 'spd']],
            ['wipe', 'Wipe', ['rot', 'amt', 'spd']],
            ['slide', 'Slide over', ['rot', 'spd']],
            ['push', 'Push', ['rot', 'col', 'spd']],
            ['iris', 'Iris', ['amt', 'spd']],
            ['split', 'Split (barn doors)', ['rot', 'spd']],
            ['zoom', 'Zoom through', ['amt', 'spd']],
            ['spin', 'Spin', ['rot', 'spd']],
            ['blur', 'Blur dissolve', ['amt', 'spd']],
            ['pix', 'Pixelate', ['amt', 'spd']]
        ];
        const DEFT = {
            type: 'dissolve',
            len: 1,
            col: '#000000',
            op: 1,
            rot: 0,
            amt: .5,
            spd: 2
        },
            ez = (p, k) => p < .5 ? .5 * Math.pow(2 * p, k) : 1 - .5 * Math.pow(2 - 2 * p, k);
        const rtA = new THREE.WebGLRenderTarget(2, 2),
            rtB = new THREE.WebGLRenderTarget(2, 2),
            CA = new THREE.PerspectiveCamera(55, 1, .1, 400),
            CB = CA.clone();
        const QM = new THREE.ShaderMaterial({
            uniforms: {
                tA: {
                    value: rtA.texture
                },
                tB: {
                    value: rtB.texture
                },
                p: {
                    value: 0
                },
                type: {
                    value: 0
                },
                op: {
                    value: 1
                },
                rot: {
                    value: 0
                },
                amt: {
                    value: .5
                },
                asp: {
                    value: 1
                },
                col: {
                    value: new THREE.Color()
                }
            },
            vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
            fragmentShader: `uniform sampler2D tA,tB;uniform float p,type,op,rot,amt,asp;uniform vec3 col;varying vec2 vUv;
vec4 bl(sampler2D t,vec2 u,float r){vec4 c=vec4(0.);for(int i=-2;i<=2;i++)for(int j=-2;j<=2;j++)c+=texture2D(t,u+vec2(float(i),float(j))*r);return c/25.;}
vec2 rt(vec2 u,float a){vec2 q=(u-.5)*vec2(asp,1.);q=vec2(cos(a)*q.x-sin(a)*q.y,sin(a)*q.x+cos(a)*q.y);return q/vec2(asp,1.)+.5;}
bool ins(vec2 u){return u.x>=0.&&u.x<=1.&&u.y>=0.&&u.y<=1.;}
void main(){vec2 u=vUv,c=u-.5,q=c*vec2(asp,1.),d=vec2(cos(rot),sin(rot));vec4 A=texture2D(tA,u),B=texture2D(tB,u),o=A;float pi=3.14159,H=.5*(abs(d.x)*asp+abs(d.y)),s=dot(q,d)/H;
 if(type<.5)o=mix(A,B,p);
 else if(type<1.5){float k=(p<.5?p:1.-p)*2.;o=mix(p<.5?A:B,vec4(col,1.),k*op);}
 else if(type<2.5){o=mix(A,B,p);o.rgb+=col*sin(pi*p)*op*1.5;}
 else if(type<3.5){float sf=.02+amt*.3,e=p*(1.+2.*sf)-sf,m=1.-smoothstep(e-sf,e+sf,s*.5+.5);o=mix(A,B,m);}
 else if(type<4.5){vec2 v=u+d*(1.-p);if(ins(v))o=texture2D(tB,v);}
 else if(type<5.5){vec2 a=u-d*p,b=u-d*p+d;if(ins(a))o=texture2D(tA,a);else if(ins(b))o=texture2D(tB,b);else o=vec4(col,1.);}
 else if(type<6.5){float sf=.02+amt*.25,r=length(q),e=p*(.5*length(vec2(asp,1.))+2.*sf)-sf;o=mix(A,B,1.-smoothstep(e-sf,e+sf,r));}
 else if(type<7.5){o=mix(A,B,1.-smoothstep(p-.01,p+.01,abs(s)));}
 else if(type<8.5){float z=amt*3.;o=mix(texture2D(tA,c/(1.+p*z)+.5),texture2D(tB,c/(1.+(1.-p)*z)+.5),p);}
 else if(type<9.5){o=mix(texture2D(tA,rt(u,-p*rot)),texture2D(tB,rt(u,(1.-p)*rot)),p);}
 else if(type<10.5){float r=amt*.03*sin(pi*p);o=mix(bl(tA,u,r),bl(tB,u,r),p);}
 else{float n=600.*pow(.03,sin(pi*p)*(.4+.6*amt));vec2 g=vec2(n*asp,n),v=(floor(u*g)+.5)/g;o=mix(texture2D(tA,v),texture2D(tB,v),p);}
 gl_FragColor=vec4(o.rgb,1.);}`,
            depthTest: false
        });
        const QS = new THREE.Scene(),
            QC = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        QS.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), QM));
        const snap = o => {
            o.position.copy(C.position);
            o.quaternion.copy(C.quaternion);
            o.fov = C.fov;
            o.updateProjectionMatrix()
        };

        function frame() {
            if (!job) {
                R.render(S, C);
                return
            }
            const tr = job.tr,
                U = QM.uniforms;
            U.p.value = ez(job.p, tr.spd);
            U.type.value = TRN.findIndex(x => x[0] == tr.type) - 1;
            U.op.value = tr.op;
            U.rot.value = tr.rot * D2R;
            U.amt.value = tr.amt;
            U.asp.value = vp.clientWidth / vp.clientHeight;
            U.col.value.set(tr.col);
            R.setRenderTarget(rtA);
            R.render(S, CA);
            R.setRenderTarget(rtB);
            R.render(S, CB);
            R.setRenderTarget(null);
            R.render(QS, QC)
        }
        const PC = {
            col: ['Colour', 'color'],
            op: ['Opacity', 0, 1, .05],
            rot: ['Rotation °', -180, 180, 15],
            amt: ['Amount', 0, 1, .05],
            spd: ['Ease', 1, 4, .25]
        };
        const pr_ = (t, k) => {
            const d = PC[k];
            return d[1] == 'color' ? `<label class="f">${d[0]}<input type="color" data-p="${k}" value="${t[k]}"></label>` : `<label class="f">${d[0]}<input type="range" data-p="${k}" min="${d[1]}" max="${d[2]}" step="${d[3]}" value="${t[k]}"><b>${t[k]}</b></label>`
        };

        function trn(i) {
            const t = seq[i].tr || {
                type: 'none'
            },
                df = TRN.find(x => x[0] == t.type),
                open = selT == i && t.type != 'none';
            return `<div class="trn${selT == i ? ' sel' : ''}" data-t="${i}"><div class="th"><span>⇄</span><select data-ty="1">${TRN.map(x => `<option value="${x[0]}"${x[0] == t.type ? ' selected' : ''}>${x[1]}</option>`).join('')}</select>${t.type != 'none' ? `<button data-a="tt">${open ? '▴' : '▾'}</button>` : ''}</div>
 ${open ? `<label class="f">Length<input type="range" data-p="len" min=".25" max="4" step=".25" value="${t.len}"><b class="lb">${t.len}s</b></label>` + df[2].map(k => pr_(t, k)).join('') : ''}</div>`
        }
        // shot cards
        const fmt = s => `${Math.floor(s / 60)}:${(s % 60).toFixed(1).padStart(4, '0')}`,
            opts = m => CATS.map(([c, l]) => `<optgroup label="${c}">${l.map(([n]) => `<option${n == m ? ' selected' : ''}>${n}</option>`).join('')}</optgroup>`).join('');
        let cvOpen = false,
            hd = -1;
        const CVP = [
            [0, 0, 1, 1],
            [.25, .1, .25, 1],
            [.42, 0, 1, 1],
            [0, 0, .58, 1],
            [.42, 0, .58, 1],
            [.34, 1.56, .64, 1]
        ],
            CVN = ['Linear', 'Ease', 'In', 'Out', 'In-Out', 'Overshoot'];
        const cvSVG = k => {
            const P = (x, y) => `${20 + 160 * x},${150 - 100 * y}`,
                [a, b, c, d] = k;
            return `<rect x="20" y="50" width="160" height="100" fill="none" stroke="#403425"/><path d="M${P(0, 0)} L${P(1, 1)}" stroke="#403425" stroke-dasharray="3"/><path d="M${P(0, 0)} L${P(a, b)} M${P(1, 1)} L${P(c, d)}" stroke="#a8946f"/><path d="M${P(0, 0)} C${P(a, b)} ${P(c, d)} ${P(1, 1)}" fill="none" stroke="#e3a72f" stroke-width="2.5"/><circle data-h="0" cx="${20 + 160 * a}" cy="${150 - 100 * b}" r="7" fill="#e3a72f"/><circle data-h="1" cx="${20 + 160 * c}" cy="${150 - 100 * d}" r="7" fill="#e3a72f"/>`
        };
        const curve = c => `<fieldset><legend>Advanced</legend><button data-a="cvt">Animation curve ${cvOpen ? '▴' : '▾'}</button>` + (cvOpen ? `<svg id="cv" viewBox="0 0 200 200" style="width:100%;background:#17130e;border-radius:6px;touch-action:none">${cvSVG(c.cv || CVP[4])}<text x="180" y="168" fill="#a8946f" font-size="9" text-anchor="end">time →</text><text x="4" y="46" fill="#a8946f" font-size="9">progress ↑</text></svg><div class="ed">${CVN.map((n, i) => `<button data-a="cvp:${i}">${n}</button>`).join('')}<button data-a="cvr">Reset</button></div><small>${c.cv ? 'Custom curve' : 'Using the move default easing'}. Drag the handles; going above 1 or below 0 overshoots.</small>` : '') + `</fieldset>`;

        function card(c, i) {
            const s = i == sel,
                d = dur(c).toFixed(1),
                ln = Math.min(30, Math.max(.5, Math.round(dur(c) * 2) / 2)),
                f = Math.round(F.f),
                on = (k, v) => k == v ? ' class="on"' : '';
            let h = `<div class="card${s ? ' sel' : ''}" data-i="${i}"><div class="ch" data-a="pick"><span class="ix">${i + 1}</span><div class="ti"><b>${c.m}</b><small>${d}s · ×${c.sp} · ${c.st ? 'custom' : 'auto'} start · ${c.en ? 'custom' : 'auto'} end</small></div>
 <div class="ic"><button data-a="up" title="Move earlier">▲</button><button data-a="dn" title="Move later">▼</button><button data-a="dup" title="Duplicate shot">⧉</button><button data-a="del" title="Delete shot">✕</button></div></div>`;
            if (s) h += `<div class="bd"><label class="f">Camera move<select data-f="m">${opts(c.m)}</select></label>
 <div class="f">Length<input type="range" data-f="len" min=".5" max="30" step=".5" value="${ln}"><b class="lb">${ln}s</b></div>
 <div class="f">Speed<span class="ed"><button data-a="sm">−</button><b>×${c.sp}</b><button data-a="sp">+</button></span></div>
 <fieldset><legend>Framing</legend><div class="seg"><button data-a="ed:st"${on(ed, 'st')}>Start frame</button><button data-a="ed:en"${on(ed, 'en')}>End frame</button></div>
 <div class="seg"><button data-a="vw:frame"${on(view, 'frame')}>Frame view</button><button data-a="vw:explore"${on(view, 'explore')}>Explore scene</button></div>
 <div class="seg"><button data-a="md:translate"${on(tm, 'translate')}>Drag moves</button><button data-a="md:rotate"${on(tm, 'rotate')}>Drag rotates</button></div>
 <label class="f">Zoom<input type="range" data-f="fov" min="15" max="80" value="${f}"><b>${f}</b></label>
 <div class="ed"><span class="tag">${c[ed] ? 'Custom framing' : 'Auto framing'}</span><button data-a="rs">Reset</button></div></fieldset>
 <fieldset><legend>Focus</legend><label class="f">Blur at start<input type="range" data-f="b0" min="0" max="12" step=".5" value="${c.b0}"><b>${c.b0}</b></label>
 <label class="f">Blur at end<input type="range" data-f="b1" min="0" max="12" step=".5" value="${c.b1}"><b>${c.b1}</b></label></fieldset>${curve(c)}</div>`;
            return h + '</div>'
        }

        function sync() {
            refreshF(!fd);
            $('shots').innerHTML = seq.map((c, i) => card(c, i) + (i < seq.length - 1 ? trn(i) : '')).join('');
            $('pp').textContent = playing ? '⏸' : '▶';
            $('pl').textContent = `Shot ${sel + 1} · ${ed == 'st' ? 'start' : 'end'} frame`;
            tl()
        }

        function tl() {
            const T = total(),
                o = offs(),
                step = T > 60 ? 10 : T > 24 ? 5 : T > 10 ? 2 : 1;
            let r = '',
                h = '';
            for (let x = 0; x <= T; x += step) r += `<i style="left:${x / T * 100}%">${x}s</i>`;
            seq.forEach((c, i) => {
                h += `<div class="blk${i == sel ? ' sel' : ''}" style="left:${o[i] / T * 100}%;width:${dur(c) / T * 100}%;top:${i % 2 * 54}%"><span class="lb2">${i + 1} · ${c.m}</span>` + ['st', 'en'].map(e => `<i class="kf${c[e] ? ' cu' : ''}${i == sel && ed == e ? ' on' : ''}" data-i="${i}" data-e="${e}" style="left:${e == 'st' ? 0 : 100}%" title="${e == 'st' ? 'Start' : 'End'} frame"></i>`).join('') + '</div>'
            });
            seq.forEach((c, i) => {
                const l = trL(i);
                if (l) h += `<div class="trb${selT == i ? ' sel' : ''}" data-t="${i}" style="left:${o[i + 1] / T * 100}%;width:${l / T * 100}%" title="Transition"></div>`
            });
            $('rl').innerHTML = r;
            $('tt').textContent = fmt(T);
            $('bl').innerHTML = h
        }
        const after = () => {
            if (span) {
                const r = ct / tot;
                rebuild(mode);
                ct = r * tot
            }
            sync()
        },
            sps = (c, len) => c.sp = Math.min(60, Math.max(.01, r3(reg[c.m].d / Math.max(.5, len))));
        $('shots').onclick = e => {
            const b = e.target.closest('[data-a]');
            if (!b) return;
            const tn = b.closest('.trn');
            if (tn) {
                selT = selT == +tn.dataset.t ? -1 : +tn.dataset.t;
                return sync()
            }
            const i = +b.closest('.card').dataset.i,
                [a, v] = b.dataset.a.split(':'),
                c = seq[sel],
                sw = (x, y) => {
                    [seq[x], seq[y]] = [seq[y], seq[x]];
                    sel = y
                };
            if (a == 'pick') {
                sel = i;
                view = 'frame';
                freeUp()
            } else if (a == 'up' && i > 0) sw(i, i - 1);
            else if (a == 'dn' && i < seq.length - 1) sw(i, i + 1);
            else if (a == 'dup') {
                seq.splice(i + 1, 0, JSON.parse(JSON.stringify(seq[i])));
                sel = i + 1;
                freeUp()
            } else if (a == 'del' && seq.length > 1) {
                seq.splice(i, 1);
                sel = Math.min(sel, seq.length - 1);
                freeUp()
            } else if (a == 'l-') sps(c, dur(c) - .5);
            else if (a == 'l+') sps(c, dur(c) + .5);
            else if (a == 'sm') c.sp = Math.max(.05, r3(c.sp - .25));
            else if (a == 'sp') c.sp = Math.min(8, r3(c.sp + .25));
            else if (a == 'ed') {
                ed = v;
                freeUp()
            } else if (a == 'md') tm = v;
            else if (a == 'rs') {
                c[ed] = null;
                freeUp()
            } else if (a == 'vw') {
                if (v == 'explore' && !span) toOrbit();
                view = v;
                freeUp()
            } else if (a == 'cvt') cvOpen = !cvOpen;
            else if (a == 'cvp') c.cv = [...CVP[+v]];
            else if (a == 'cvr') c.cv = null;
            after()
        };
        $('shots').oninput = e => {
            const pk = e.target.dataset.p;
            if (pk) {
                const t = seq[+e.target.closest('.trn').dataset.t].tr,
                    v = e.target.value;
                t[pk] = pk == 'col' ? v : +v;
                if (pk != 'col') e.target.nextElementSibling.textContent = v + (pk == 'len' ? 's' : '');
                tl();
                return
            }
            const f = e.target.dataset.f,
                c = seq[sel],
                v = e.target.value;
            if (f == 'b0' || f == 'b1') {
                c[f] = +v;
                e.target.nextElementSibling.textContent = v
            } else if (f == 'len') {
                sps(c, +v);
                e.target.nextElementSibling.textContent = v + 's';
                tl()
            } else if (f == 'fov') {
                freeUp();
                F.f = +v;
                e.target.nextElementSibling.textContent = v;
                commit()
            }
        };
        $('shots').onchange = e => {
            if (e.target.dataset.p) {
                after();
                return
            }
            if (e.target.dataset.ty) {
                const i = +e.target.closest('.trn').dataset.t,
                    v = e.target.value;
                seq[i].tr = v == 'none' ? null : {
                    ...DEFT,
                    ...(seq[i].tr || {}),
                    type: v
                };
                selT = v == 'none' ? -1 : i;
                after();
                return
            }
            const f = e.target.dataset.f;
            if (f == 'm') {
                seq[sel].m = e.target.value;
                after();
                if (!span) play(false)
            } else if (f == 'len') {
                sps(seq[sel], +e.target.value);
                after()
            }
        };
        $('add').onclick = () => {
            seq.splice(sel + 1, 0, newClip());
            sel++;
            view = 'frame';
            freeUp();
            sync()
        };
        $('stp').onclick = () => {
            freeUp();
            sync()
        };
        $('pc').onclick = () => play(false);
        $('pa').onclick = () => play(true);
        $('pp').onclick = () => {
            if (!span) return play(true);
            playing = !playing;
            if (playing && ct >= tot) ct = 0;
            sync()
        };
        let dn = false;
        const tk = $('tk'),
            sk = e => {
                const r = tk.getBoundingClientRect();
                seek((e.clientX - r.left) / r.width * total())
            };
        tk.onpointerdown = e => {
            const k = e.target.closest('.kf'),
                tb = e.target.closest('.trb');
            if (k) {
                sel = +k.dataset.i;
                ed = k.dataset.e;
                view = 'frame';
                freeUp();
                return sync()
            }
            if (tb) {
                selT = sel = +tb.dataset.t;
                freeUp();
                return sync()
            }
            dn = true;
            tk.setPointerCapture(e.pointerId);
            sk(e)
        };
        tk.onpointermove = e => {
            if (dn) sk(e)
        };
        tk.onpointerup = () => dn = false;
        R.domElement.addEventListener('pointerdown', () => {
            if (span) {
                toOrbit();
                freeUp();
                view = 'explore';
                sync()
            }
        });
        CATS.forEach(([c, list]) => list.forEach(([n, sp]) => {
            if (sp) reg[n] = {
                d: 6,
                ...sp
            }
        }));
        fit();
        // ---- import / export ----
        const out = c => ({
            move: c.m,
            spec: reg[c.m],
            speed: c.sp,
            start: c.st,
            end: c.en,
            blurStart: c.b0,
            blurEnd: c.b1,
            transition: c.tr || null,
            curve: c.cv || null
        });
        const box = t => {
            $('jt').value = t;
            $('jm').hidden = false
        };
        async function save(name, obj) {
            const data = JSON.stringify(obj, null, 1);
            try {
                const dl = await window.claude?.use('downloads');
                if (dl) {
                    await dl.save({
                        filename: name,
                        data
                    });
                    return
                }
            } catch (e) {
                if (e && e.code == 'declined') return
            }
            box(data)
        }
        $('ex').onclick = () => save('nile-camera-chain.json', {
            format: 'nile-camera-chain',
            version: 1,
            clips: seq.map(out)
        });
        $('es').onclick = async () => {
            for (const [i, c] of seq.entries()) await save(`nile-clip-${i + 1}-${c.m.replace(/\W+/g, '-')}.json`, {
                format: 'nile-camera-clip',
                version: 1,
                ...out(c)
            })
        };

        function loadWorld(root) {
            [...S.children].forEach(o => {
                if (o !== aux) S.remove(o)
            });
            [...root.children].forEach(o => S.add(o));
            if (root.isScene) {
                S.background = root.background;
                S.fog = root.fog
            }
            S.traverse(o => {
                if (o.material && o.material.transparent && o.material.opacity === 0) o.material.opacity = 1
            });
            let hl = false;
            S.traverse(o => {
                if (o.isLight) hl = true
            });
            if (!hl) {
                S.add(new THREE.HemisphereLight(0xffffff, 0x666666, .9));
                const d = new THREE.DirectionalLight(0xffffff, .8);
                d.position.set(20, 40, 20);
                S.add(d)
            }
            const bx = new THREE.Box3();
            S.children.forEach(o => {
                if (o !== aux && !o.isLight) bx.expandByObject(o)
            });
            if (!bx.isEmpty()) {
                bx.getCenter(c0);
                dist = Math.min(80, Math.max(16, bx.getSize(new V3()).length() * 1.2));
                tx = c0.x;
                ty = c0.y;
                tz = c0.z
            }
        }

        function loadGeneric(j) {
            const arr = j.objects || j.children || j.items;
            if (!Array.isArray(arr)) return 0;
            const g = new THREE.Group(),
                v = a => Array.isArray(a) ? a : a && typeof a == 'object' ? [a.x || 0, a.y || 0, a.z || 0] : null,
                T = THREE,
                GM = {
                    box: () => new T.BoxGeometry(2, 2, 2),
                    sphere: () => new T.SphereGeometry(1, 24, 16),
                    cone: () => new T.ConeGeometry(1, 2, 24),
                    cylinder: () => new T.CylinderGeometry(1, 1, 2, 24),
                    plane: () => new T.PlaneGeometry(2, 2),
                    torus: () => new T.TorusGeometry(1, .4, 12, 32),
                    tetrahedron: () => new T.TetrahedronGeometry(1),
                    octahedron: () => new T.OctahedronGeometry(1),
                    dodecahedron: () => new T.DodecahedronGeometry(1),
                    icosahedron: () => new T.IcosahedronGeometry(1),
                    torusknot: () => new T.TorusKnotGeometry(1, .3)
                };
            arr.forEach(o => {
                try {
                    const f = GM[String(o.type || o.shape || (o.geometry && o.geometry.type) || '').toLowerCase().replace(/geometry|[_ -]/g, '')];
                    if (!f) return;
                    const m = new T.Mesh(f(), new T.MeshStandardMaterial({
                        color: o.color ?? (o.material && o.material.color) ?? 0x888888,
                        flatShading: true
                    })),
                        p = v(o.position),
                        r = v(o.rotation),
                        sc = v(o.scale);
                    if (p) m.position.set(...p);
                    if (r) m.rotation.set(...r);
                    if (sc) m.scale.set(...sc);
                    g.add(m)
                } catch (e) { }
            });
            return g.children.length ? (loadWorld(g), 1) : 0
        }

        function ingest(texts) {
            let n = 0,
                l = [];
            texts.forEach(x => {
                try {
                    const j = JSON.parse(x),
                        sc = j.scene || (j.object && j.metadata ? j : null);
                    if (sc) {
                        loadWorld(new THREE.ObjectLoader().parse(sc));
                        n++
                    } else if (loadGeneric(j)) n++;
                    ((j.timeline && j.timeline.clips) || j.clips || (j.move ? [j] : [])).forEach(o => {
                        if (o.spec && !reg[o.move]) reg[o.move] = {
                            d: 6,
                            ...o.spec
                        };
                        if (reg[o.move]) l.push({
                            m: o.move,
                            sp: o.speed || 1,
                            st: o.start || null,
                            en: o.end || null,
                            b0: o.blurStart || 0,
                            b1: o.blurEnd || 0,
                            tr: o.transition ? {
                                ...DEFT,
                                ...o.transition
                            } : null,
                            cv: o.curve || null
                        })
                    })
                } catch (e) { }
            });
            if (l.length) {
                seq = l;
                sel = 0;
                span = null;
                playing = false
            }
            if (l.length || n) {
                sync();
                $('jm').hidden = $('xm').hidden = true
            } else alert('No scene or camera clips found in that file.')
        }
        async function loadJS(t) {
            const m = t.match(/\/\*DATA\*\/([\s\S]*?)\/\*END\*\//);
            if (m) return ingest([m[1]]);
            try {
                const g = new THREE.Group();
                new Function('THREE', t)(THREE);
                const f = window.initAllScenes || window.initScene1;
                if (!f) throw 0;
                f(g);
                loadWorld(g);
                sync();
                $('xm').hidden = true
            } catch (e) {
                alert('Could not read that JS file. It should be a Nile export or a Pixel3D .js export.')
            }
        }
        $('ld').onclick = () => $('fi').click();
        $('fi').onchange = async e => {
            const f = [...e.target.files].sort((a, b) => a.name.localeCompare(b.name));
            ingest(await Promise.all(f.map(x => x.text())));
            e.target.value = ''
        };
        $('pj').onclick = () => box('');
        $('jl').onclick = () => ingest([$('jt').value]);
        $('jx').onclick = () => $('jm').hidden = true;
        const dl = async (name, data) => {
            try {
                const d = await window.claude?.use('downloads');
                if (d) {
                    await d.save({
                        filename: name,
                        data
                    });
                    return
                }
            } catch (e) {
                if (e && e.code == 'declined') return
            }
            alert('Saving files is not available in this view.')
        };
        const sceneJSON = () => {
            S.remove(aux);
            const j = S.toJSON();
            S.add(aux);
            return j
        },
            tlJ = () => ({
                clips: seq.map(out)
            }),
            wrapJS = d => `/* Nile camera studio export */\n(function(){var DATA=/*DATA*/${JSON.stringify(d)}/*END*/;window.NILE_EXPORT=DATA;\nwindow.initScene1=function(group){var s=new THREE.ObjectLoader().parse(DATA.scene);s.children.slice().forEach(function(c){group.add(c)});return s};\nwindow.initAllScenes=function(group){window.initScene1(group)};})();\n`;
        const crcT = (() => {
            const t = [];
            for (let n = 0; n < 256; n++) {
                let c = n;
                for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
                t[n] = c >>> 0
            }
            return t
        })(),
            crc = b => {
                let c = -1;
                for (let i = 0; i < b.length; i++) c = crcT[(c ^ b[i]) & 255] ^ (c >>> 8);
                return (~c) >>> 0
            };

        function zip(files) {
            const en = new TextEncoder(),
                parts = [],
                cd = [];
            let off = 0;
            files.forEach(([n, d]) => {
                const nb = en.encode(n),
                    c = crc(d),
                    h = new DataView(new ArrayBuffer(30));
                h.setUint32(0, 0x04034b50, true);
                h.setUint16(4, 20, true);
                h.setUint32(14, c, true);
                h.setUint32(18, d.length, true);
                h.setUint32(22, d.length, true);
                h.setUint16(26, nb.length, true);
                parts.push(h.buffer, nb, d);
                const g = new DataView(new ArrayBuffer(46));
                g.setUint32(0, 0x02014b50, true);
                g.setUint16(4, 20, true);
                g.setUint16(6, 20, true);
                g.setUint32(16, c, true);
                g.setUint32(20, d.length, true);
                g.setUint32(24, d.length, true);
                g.setUint16(28, nb.length, true);
                g.setUint32(42, off, true);
                cd.push(g.buffer, nb);
                off += 30 + nb.length + d.length
            });
            const e = new DataView(new ArrayBuffer(22));
            e.setUint32(0, 0x06054b50, true);
            e.setUint16(8, files.length, true);
            e.setUint16(10, files.length, true);
            e.setUint32(12, cd.reduce((a, b) => a + b.byteLength, 0), true);
            e.setUint32(16, off, true);
            return new Blob([...parts, ...cd, e.buffer], {
                type: 'application/zip'
            })
        }
        let xcancel = false;
        const xp = t => $('xp').textContent = t,
            tick = () => new Promise(r => setTimeout(r, 0));
        async function sweep(step, cb) {
            rebuild(true);
            const n = Math.floor(tot / step + 1e-6) + 1;
            for (let i = 0; i < n && !xcancel; i++) {
                ct = Math.min(tot, i * step);
                playing = false;
                cam(ct);
                frame();
                await cb(i, n)
            }
        }
        async function withEx(fn) {
            xcancel = false;
            const pr0 = R.getPixelRatio();
            R.setPixelRatio(1);
            fit();
            try {
                await fn()
            } catch (e) {
                xp('Export failed: ' + (e.message || e))
            } finally {
                R.setPixelRatio(pr0);
                fit();
                freeUp();
                sync()
            }
        }
        const X = {
            sj: () => dl('nile-scene.json', JSON.stringify({
                format: 'nile-scene',
                version: 1,
                scene: sceneJSON()
            })),
            sJ: () => dl('nile-scene.js', wrapJS({
                format: 'nile-scene',
                version: 1,
                scene: sceneJSON()
            })),
            tj: () => dl('nile-scene-timeline.json', JSON.stringify({
                format: 'nile-scene-timeline',
                version: 1,
                scene: sceneJSON(),
                timeline: tlJ()
            })),
            tJ: () => dl('nile-scene-timeline.js', wrapJS({
                format: 'nile-scene-timeline',
                version: 1,
                scene: sceneJSON(),
                timeline: tlJ()
            })),
            png: () => withEx(async () => {
                const files = [];
                await sweep($('sf').value == '1' ? 1 : 1 / 12, async (i, n) => {
                    const b = atob(R.domElement.toDataURL('image/png').split(',')[1]);
                    files.push([`frame_${String(i + 1).padStart(4, '0')}.png`, Uint8Array.from(b, c => c.charCodeAt(0))]);
                    if (i % 4 == 0) {
                        xp(`Rendering ${i + 1}/${n}`);
                        await tick()
                    }
                });
                if (!xcancel) {
                    await dl('nile-stills.zip', zip(files));
                    xp('Done')
                }
            }),
            mp4: () => withEx(async () => {
                if (!window.VideoEncoder || !window.Mp4Muxer) throw new Error('MP4 export needs a browser with WebCodecs (recent Chrome, Edge or Safari)');
                const fps = +$('vf').value,
                    w = R.domElement.width,
                    h = R.domElement.height,
                    mx = new Mp4Muxer.Muxer({
                        target: new Mp4Muxer.ArrayBufferTarget(),
                        video: {
                            codec: 'avc',
                            width: w,
                            height: h
                        },
                        fastStart: 'in-memory'
                    }),
                    enc = new VideoEncoder({
                        output: (c, m) => mx.addVideoChunk(c, m),
                        error: e => xp('Encoder error: ' + e.message)
                    });
                enc.configure({
                    codec: 'avc1.640028',
                    width: w,
                    height: h,
                    bitrate: 8e6,
                    framerate: fps
                });
                await sweep(1 / fps, async (i, n) => {
                    const f = new VideoFrame(R.domElement, {
                        timestamp: Math.round(i * 1e6 / fps)
                    });
                    enc.encode(f, {
                        keyFrame: i % fps == 0
                    });
                    f.close();
                    if (i % 4 == 0) {
                        xp(`Encoding ${i + 1}/${n}`);
                        await tick()
                    }
                    while (enc.encodeQueueSize > 8) await tick()
                });
                if (!xcancel) {
                    await enc.flush();
                    mx.finalize();
                    await dl('nile-shot.mp4', new Blob([mx.target.buffer], {
                        type: 'video/mp4'
                    }));
                    xp('Done')
                }
            })
        };
        $('xm').onclick = e => {
            const k = e.target.closest('[data-x]');
            if (k) X[k.dataset.x]()
        };
        $('xo').onclick = () => {
            $('xm').hidden = false;
            xp('')
        };
        $('xc').onclick = () => {
            xcancel = true;
            $('xm').hidden = true
        };
        $('ld2').onclick = () => $('fj').click();
        $('fj').onchange = async e => {
            for (const f of e.target.files) await loadJS(await f.text());
            e.target.value = ''
        };
        document.addEventListener('pointerdown', e => {
            const h = e.target.dataset && e.target.dataset.h;
            if (h !== undefined && e.target.closest('#cv')) {
                const c = seq[sel];
                c.cv = c.cv || [...CVP[4]];
                hd = +h
            }
        });
        addEventListener('pointermove', e => {
            if (hd < 0) return;
            const c = seq[sel],
                sv = $('cv'),
                r = sv.getBoundingClientRect(),
                x = (e.clientX - r.left) / r.width * 200,
                y = (e.clientY - r.top) / r.height * 200;
            c.cv[hd * 2] = cl((x - 20) / 160);
            c.cv[hd * 2 + 1] = Math.min(1.5, Math.max(-.5, (150 - y) / 100));
            sv.querySelectorAll('rect,path,circle').forEach(n => n.remove());
            sv.insertAdjacentHTML('afterbegin', cvSVG(c.cv))
        });
        addEventListener('pointerup', () => {
            if (hd >= 0) {
                hd = -1;
                after()
            }
        });
        sync();
        // camera orbit
        let az = 0,
            pol = 1.42,
            dist = 44,
            tx = -4,
            ty = 4,
            tz = -14,
            idle = 0;
        const ptrs = new Map();
        let pd = 0;
        R.domElement.addEventListener('pointerdown', e => {
            ptrs.set(e.pointerId, e);
            R.domElement.setPointerCapture(e.pointerId);
            idle = 0
        });
        R.domElement.addEventListener('pointerup', e => ptrs.delete(e.pointerId));
        R.domElement.addEventListener('pointermove', e => {
            if (tcDrag || !ptrs.has(e.pointerId)) return;
            const o = ptrs.get(e.pointerId);
            if (ptrs.size == 1) {
                az -= (e.clientX - o.clientX) * .005;
                pol = Math.min(1.52, Math.max(.9, pol - (e.clientY - o.clientY) * .004))
            }
            ptrs.set(e.pointerId, e);
            if (ptrs.size == 2) {
                const [a, b] = [...ptrs.values()], d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
                if (pd) dist = Math.min(80, Math.max(16, dist * pd / d));
                pd = d
            }
        });
        R.domElement.addEventListener('pointerup', () => pd = 0);
        R.domElement.addEventListener('wheel', e => {
            if (tcDrag) return;
            dist = Math.min(80, Math.max(16, dist + e.deltaY * .03))
        }, {
            passive: true
        });
        const clk = new THREE.Clock();
        (function loop() {
            requestAnimationFrame(loop);
            const t = clk.getElapsedTime();
            idle += 1;
            const p = wg.attributes.position;
            for (let i = 0; i < p.count; i++) p.setY(i, Math.sin(w0[i * 3] * .35 + t * 1.2) * .12 + Math.cos(w0[i * 3 + 2] * .8 + t) * .1);
            p.needsUpdate = true;
            boats.forEach(([b, v], i) => {
                b.position.x += v * .012;
                if (b.position.x > 110) b.position.x = -110;
                if (b.position.x < -110) b.position.x = 110;
                b.position.y = -.2 + Math.sin(t * 1.5 + i) * .08;
                b.rotation.z = Math.sin(t * 1.2 + i) * .03
            });
            cam(t);
            frame()
        })(); 
