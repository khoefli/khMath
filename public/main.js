/*----------------------------------------------------------------------------*/
/* static data                                                                */
/*----------------------------------------------------------------------------*/
const Menu_Data =
[
  'home',
  'impressum',
  'about_me',
  'sitemap',
  'msc46',

  'textbooks',
  'lecture_notes',
  'research_articles',
  'my_documents',

  'internet_seminar_evo',

  'grundlehren',
  'dover',
  'gtm',
  'gsm',
  'mass',
  'bourbaki',
  'lecture_notes_in_mathematics',

  'key_concepts',
  'main_theorems',
  'mathematicians',
  'journals',
  'topic_tree',

  'linear_algebra',
  'general_topology',
  'complex_analysis',
  'measure_and_integration_theory',
  'pde_theory',
  'abstract_harmonic_analysis',

  'functional_analysis',
  'topological_linear_spaces',
  'spectral_theory',
  'self-adjoint_operators',
  'semigroup_theory',
  'coercive_sesquilinear_forms',
  'distribution_theory',
  'nonlinear_functional_analysis',
  'history',

  'Dunford_Schwartz',
  'Lions_Magenes',
  'Reed_Simon',
  'Kato',
  'Yosida',
  'Nagy',
  'Rudin',
  'Fattorini',
  'Hörmander'
];

const Topics_Data =
[
  { c:'root',  p:'',     t:'Functional Analysis'},

  { c:'TVS',   p:'root', t:'topological and normed linear spaces'},
  { c:'TVSa',  p:'TVS',  t:'generalities on topological linear spaces'},
  { c:'TVSb',  p:'TVS',  t:'seminorms and locally convex spaces'},
  { c:'TVSc',  p:'TVS',  t:'normed linear spaces'},
  { c:'TVSc1', p:'TVSc', t:'strictly and uniformly convex spaces'},
  { c:'TVSc2', p:'TVSc', t:'Banach and Hilbert spaces'},
  { c:'TVSc3', p:'TVSc', t:'geometrical properties of Hilbert spaces'},
  { c:'TVSd',  p:'TVS',  t:'spaces of scalar-valued functions and measures'},
  { c:'TVSd1', p:'TVSd', t:'spaces of countinuous functions'},
  { c:'TVSd2', p:'TVSd', t:'spaces of smooth functions'},
  { c:'TVSd3', p:'TVSd', t:'Hölder spaces'},
  { c:'TVSd4', p:'TVSd', t:'Lebesgue spaces'},
  { c:'TVSd5', p:'TVSd', t:'Sobolev spaces'},
  { c:'TVSd6', p:'TVSd', t:'spaces of sequences'},
  { c:'TVSd7', p:'TVSd', t:'spaces of measures'},

  { c:'LO',    p:'root', t:'linear operators'},
  { c:'LOa',   p:'LO',   t:'general theory of linear operators'},
  { c:'LOb',   p:'LO',   t:'classification of operators by topological properties'},
  { c:'LOb1',  p:'LOb',  t:'continuous operators'},
  { c:'LOb1',  p:'LOb',  t:'bounded operators'},
  { c:'LOb2',  p:'LOb',  t:'compact and finit-rank operators'},
  { c:'LOb3',  p:'LOb',  t:'closed operators'},
  { c:'LOb4',  p:'LOb',  t:'pre-closed operators'},
  { c:'LOc',   p:'LO',   t:'closed graph and bounded inverse theorem'},

  { c:'ADJ',   p:'root', t:'adjoint spaces and operators'},
  { c:'ADJa',  p:'ADJ',  t:'continuous linear functionals'},
  { c:'ADJa1', p:'ADJa', t:'weak- and weak* topologies'},
  { c:'ADJa2', p:'ADJa', t:'bidual spaces and reflexivity '},
  { c:'ADJa3', p:'ADJa', t:'representation theorems for some adjoint spaces'},
  { c:'ADJa4', p:'ADJa', t:'sesquilinear forms'},
  { c:'ADJa5', p:'ADJa', t:'Riesz\'s representation theorem'},
  { c:'ADJb',  p:'ADJ',  t:'adjoint operators'},
  { c:'ADJb1', p:'ADJb', t:'adjoint operators in locally convex spaces'},
  { c:'ADJb2', p:'ADJb', t:'adjoint operators in Banach spaces'},
  { c:'ADJb3', p:'ADJb', t:'Hilbert adjoints and classes of normal operators'},
  { c:'ADJb4', p:'ADJb', t:'adjoint sesquilinear forms'},
  { c:'ADJc',  p:'ADJ',  t:'distribution theory'},
  { c:'ADJc1', p:'ADJc', t:'spaces of test functions and distributions'},
  { c:'ADJc2', p:'ADJc', t:'convolution and tensor products'},
  { c:'ADJc3', p:'ADJc', t:'formally-adjoint differential expressions'},
  { c:'ADJc4', p:'ADJc', t:'differential operators with constant coefficients'},

  { c:'NSO',   p:'root', t:'normally solvable operators'},
  { c:'NSOa',  p:'NSO',  t:'Banach\'s closed range theorem'},
  { c:'NSOb',  p:'NSO',  t:'operators bounded-below'},
  { c:'NSOc',  p:'NSO',  t:'the Fredholm index'},
  { c:'NSOd',  p:'NSO',  t:'perturbation theory of semi-Fredholm operators'},
  { c:'NSOe',  p:'NSO',  t:'Fredholm operators'},
  { c:'NSOf',  p:'NSO',  t:'Fredholm\'s alternative theorem'},
  { c:'NSOg',  p:'NSO',  t:'concepts of solvability for linear equations'},

  { c:'CVF',   p:'root', t:'calculus of vector-valued functions'},
  { c:'CVFa',  p:'CVF',  t:'spaces of classical differentiable functions'},
  { c:'CVFb',  p:'CVF',  t:'Riemann integration'},
  { c:'CVFd',  p:'CVF',  t:'Bochner integration'},
  { c:'CVFg',  p:'CVF',  t:'weak derivatives and Bochner-Sobolev spaces'},
  { c:'CVFh',  p:'CVF',  t:'holomorphic vector-valued functions'},

  { c:'LOH',   p:'root', t:'linear operators in Hilbert space'},
  { c:'LOHa',  p:'LOH',  t:'numerical range and external field of regularity'},
  { c:'LOHb',  p:'LOH',  t:'unitary operators and isometries'},
  { c:'LOHc',  p:'LOH',  t:'symmetric operators'},
  { c:'LOHd',  p:'LOH',  t:'self-adjoint operators'},
  { c:'LOHe',  p:'LOH',  t:'essentially self-adjoint operators'},
  { c:'LOHf',  p:'LOH',  t:'extension theory for symmetric operators'},
  { c:'LOHg',  p:'LOH',  t:'perturbation theory for self-adjoint operators'},

  { c:'CBA',   p:'root', t:'commutative Banach algebras'},
  { c:'CBAa',  p:'CBA',  t:'Gelfand representation'},
  { c:'VBAb',  p:'CBA',  t:'involutional algebras and C*-algebras'},
  { c:'CBAc',  p:'CBA',  t:'abstract Fourier transformation'},
  { c:'CBAc1', p:'CBAc', t:'generalities on topological groups'},
  { c:'CBAc2', p:'CBAc', t:'locally compact Abelian groups '},
  { c:'CBAc3', p:'CBAc', t:'Fourier transformation on LCA groups '},
  { c:'CBAc4', p:'CBAc', t:'the Fourier transform in Euclidean spaces'},

  { c:'SPT',   p:'root', t:'spectral theory'},
  { c:'SPTa',  p:'SPT',  t:'general theory on resolvent and spectrum'},
  { c:'SPTa1', p:'SPTa', t:'resolvent sets and resolvents'},
  { c:'SPTa2', p:'SPTa', t:'different kinds of spectra'},
  { c:'SPTa3', p:'SPTa', t:'essential and discrete spectrum'},
  { c:'SPTa5', p:'SPTa', t:'Dunford functional calculus for bounded linear operators'},
  { c:'SPTa6', p:'SPTa', t:'projections in a Banach space'},
  { c:'SPTb',  p:'SPT',  t:'spectral theory for compact operators'},
  { c:'SPTb1', p:'SPTb', t:'Riesz-Schauder spectral theorem'},
  { c:'SPTb2', p:'SPTb', t:'spectrum of symmetric and self-adjoint operators'},
  { c:'SPTb3', p:'SPTb', t:'operators with compact resolvents'},
  { c:'SPTc',  p:'SPT',  t:'spectral theory for normal operators in Hilbert space'},
  { c:'SPTc1', p:'SPTc', t:'projection operators'},
  { c:'SPTc2', p:'SPTc', t:'spectral resolutions and spectral operators'},
  { c:'SPTc3', p:'SPTc', t:'functional calculus for spectral operators'},
  { c:'SPTc4', p:'SPTc', t:'spectral theorems for self-adjoint and unitary operators'},
  { c:'SPTd',  p:'SPT',  t:'spectral theory for Banach and C*-algebras'},
  { c:'SPTd1', p:'SPTd', t:'spectrum of elements in a unital Banach algebra'},
  { c:'SPTd3', p:'SPTd', t:'Gelfand-Naimark spectral theorem'},

  { c:'SGT',   p:'root', t:'semigroup theory'},
  { c:'SGTa',  p:'SGT',  t:'strongly continuous semigroups'},
  { c:'SGTa1', p:'SGTa', t:'infinitesimal generators'},
  { c:'SGTa2', p:'SGTa', t:'Hille-Yosida generator theorem'},
  { c:'SGTa3', p:'SGTa', t:'accretive operators'},
  { c:'SGTa4', p:'SGTa', t:'Lumer-Phillips generator theorem'},
  { c:'SGTb',  p:'SGT',  t:'analytic semigroups'},
  { c:'SGTb1', p:'SGTb', t:'sectorial operators'},
  { c:'SGTb2', p:'SGTb', t:'unitary groups of operators and Stone\'s generator theorem'},

  { c:'LEE',   p:'root', t:'linear evolution equations'},
  { c:'LEEa',  p:'LEE',  t:'general Cauchy problems of first and second order'},
  { c:'LEEb',  p:'LEE',  t:'Cauchy problems governed by positive self-adjoint operators'},
  { c:'LEEc',  p:'LEE',  t:'inhomogeneous Cauchy problems'},
  { c:'LEEd',  p:'LEE',  t:'well-posedness of the second-order Cauchy problem'},

  { c:'CSF',   p:'root', t:'coercive sesquilinear forms'},
  { c:'CSFa',  p:'CSF',  t:'generalities on sesquilinear forms'},
  { c:'CSFb',  p:'CSF',  t:'coercive forms and variational equations'},
  { c:'CSFc',  p:'CSF',  t:'triples of Hilbert spaces'},
  { c:'CSFd',  p:'CSF',  t:'abstract stationary boundary value problems'},
  { c:'CSFe',  p:'CSF',  t:'linear operators associated with a H-elliptic form'},
  { c:'CSFf',  p:'CSF',  t:'sectorial forms and m-sectorial operators'},
  { c:'CSFg',  p:'CSF',  t:'Friedrich\'s extension theory for half-bounded operators'},
  { c:'CSFh',  p:'CSF',  t:'variational evolution equations'},

  { c:'DBT',   p:'root', t:'distribution theory'},
  { c:'DBTa',  p:'DBT',  t:'distributions in the sense of L. Schwartz'},
  { c:'DBTb',  p:'DBT',  t:'the spaces \\(\\mathcal{D\'}(\\Omega)\\), \\(\\mathcal{E}\'(\\Omega)\\)'},
  { c:'DBTc',  p:'DBT',  t:'convolution and tensor products'},
  { c:'DBTd',  p:'DBT',  t:'the Schwartz space \\(\\mathcal{S}(\\mathbf{R}^d)\\)'},
  { c:'DBTe',  p:'DBT',  t:'the space \\(\\mathcal{S}\'(\\mathbf{R}^d)\\) of tempered distributions'},
  { c:'DBTf',  p:'DBT',  t:'Fourier transformation in distributional spaces'},

  { c:'APP',   p:'root', t:'applications to linear partial differential operators'},
  { c:'APPa',  p:'APP',  t:'generalities on differential operators'},
  { c:'APPb',  p:'APP',  t:'differential operators in divergence form'},
  { c:'APPc',  p:'APP',  t:'operators of elliptic, parabolic and hyperbolic type'},
  { c:'APPd',  p:'APP',  t:'differential equations governed by linear differential operators'},
  { c:'APPd1', p:'APPd', t:'free space problems'},
  { c:'APPd2', p:'APPd', t:'boundary value problems'},
  { c:'APPd3', p:'APPd', t:'initial-boundary value problems'},
  { c:'APPd4', p:'APPd', t:'eigenvalue problems'},
  { c:'APPe',  p:'APP',  t:'functional analytic methods for linear differential operators'},
  { c:'APPe1', p:'APPe', t:'realizations in Banach spaces of functions'},
  { c:'APPe2', p:'APPe', t:'self-adjoint extensions of symmetric differential expressions'},
  { c:'APPe3', p:'APPe', t:'the Fredholm property of properly elliptic operators'},
  { c:'APPe4', p:'APPe', t:'spectral theory of strongly elliptic operators'},
  { c:'APPe5', p:'APPe', t:'eigenvalue problems governed by elliptic operators'},
  { c:'APPe6', p:'APPe', t:'Gårding\'s inequality and weak solutions of elliptic boundary value problems'},
  { c:'APPf',  p:'APP',  t:'linear differential operators in distributional spaces'},
  { c:'APPf1', p:'APPf', t:'fundamental solutions'},
  { c:'APPf2', p:'APPf', t:'free space problems for the Laplacian'},
  { c:'APPf3', p:'APPf', t:'Fourier transform methods'},

  { c:'NON',   p:'root', t:'nonlinear functional analysis'},
  { c:'NONa',  p:'NON',  t:'fixpoint theorems'},
  { c:'NONb',  p:'NON',  t:'monotone mappings'},
  { c:'NONc',  p:'NON',  t:'degree theory'},
  { c:'NONd',  p:'NON',  t:'applications to semilinear partial differential operators'},
]

const Isem_Scripts =
[
  { id:' 1' ,t:'One parameter semigroups and evolution equations',y:'(1997/98)'},
  { id:' 2' ,t:'Spectral theory and asymptotic behaviour of semigroups',y:'(1998/99)'},
  { id:' 3' ,t:'Semigroups generated by elliptic operators',y:'(1999/2000)'},
  { id:' 4' ,t:'Invitation to positive semigroups',y:'(2000/01)'},
  { id:' 5' ,t:'Functional calculus and differential operators',y:'(2001/02)'},
  { id:' 6' ,t:'Operator matrices and delay semigroups',y:'(2002/03)'},
  { id:' 7' ,t:'Operator semigroups and applications',y:'(2003/04)'},
  { id:' 8' ,t:'<a href=\'https://www.math.tecnico.ulisboa.pt/~czaja/ISEM/08internetseminar200405.pdf\'>Analytic Semigroups and Reactor-Diffusion Problems</a>',y:'(2004/05)'},
  { id:' 9' ,t:'Heat kernels',y:'(2005/06)'},
  { id:'10' ,t:'Brownian motion and stochastic differential equations',y:'(2006/07)'},
  { id:'11' ,t:'Stochastic evolution equations',y:'(2007/08)'},
  { id:'12' ,t:'Ergodic theory – An operator theoretic approach',y:'(2008/09)'},
  { id:'13' ,t:'Gradient systems',y:'(2009/10)'},
  { id:'14' ,t:'Infinite-dimensional linear systems theory',y:'(2010/11)'},
  { id:'15' ,t:'Operator semigroups and numerical analysis',y:'(2011/12)'},
  { id:'16' ,t:'Operator Semigroups and Dispersive Equations',y:'(2012/13)'},
  { id:'17' ,t:'Positive operator semigroups and applications',y:'(2013/14)'},
  { id:'18' ,t:'<a href=\'https://user.math.uni-bremen.de/hvogt/papers/form-methods.pdf\'>Form Methods for Evolution Equations</a>',y:'(2014/15)'},
  { id:'19' ,t:'Infinite dimensional analysis',y:'(2015/16)'},
  { id:'20' ,t:'Linear parabolic equations',y:'(2016/17)'},
  { id:'21' ,t:'<a href=\'https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/ISem21complete.pdf\'>Functional calculus</a>',y:'(2017/18)'},
  { id:'22' ,t:'Ergodic theorems',y:'(2018/19)'},
  { id:'23' ,t:'<a href=\'https://www.math.tecnico.ulisboa.pt/~czaja/ISEM/23internetseminar201920.pdf\'>Evolutionary equations</a>',y:'(2019/20)'},
  { id:'24' ,t:'C*-algebras and dynamics',y:'(2020/21)'},
  { id:'25' ,t:'Spectral theory for operators and semigroups',y:'(2021/22)'},
  { id:'26' ,t:'Graphs and discrete Dirichlet spaces',y:'(2022/23)'},
  { id:'27' ,t:'Harmonic Analysis Techniques for Elliptic Operators',y:'(2023/24)'},
  { id:'28' ,t:'Ergodic structure theory and applications',y:'(2024/25)'},
  { id:'29' ,t:'Eventual positivity',y:'(2025/26)'}
]

const GL_Data =
[
  { id:' 97', l:'en', a:'W. Greub',                y:'1958', t:'Linear Algebra'},
  { id:'111', l:'fr', a:'J.-L. Lions',             y:'1961', t:'Équations différentielles opérationnelles et problèmes aux limites'},
  { id:'115', l:'en', a:'E. Hewitt, K. Ross',      y:'1963', t:'Abstract Harmonic Analysis I'},
  { id:'116', l:'en', a:'L. Hörmander',            y:'1963', t:'Linear Partial Differential Operators'},
  { id:'120', l:'de', a:'L. Collatz',              y:'1964', t:'Funktionalanalysis und numerische Mathematik'},
  { id:'123', l:'en', a:'K. Yosida',               y:'1965', t:'Functional Analysis'},
  { id:'132', l:'en', a:'T. Kato',                 y:'1966', t:'<a href=\'https://webhomes.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf\'>Perturbation Theory of Linear Operators</a>'},
  { id:'136', l:'en', a:'W. Greub',                y:'1967', t:'Multilinear Algebra'},
  { id:'152', l:'en', a:'E. Hewitt, K. Ross',      y:'1970', t:'Abstract Harmonic Analysis II'},
  { id:'181', l:'en', a:'J.-L. Lions, E. Magenes', y:'1972', t:'Non-Homogeneous Boundary Value Problems I'},
  { id:'182', l:'en', a:'J.-L. Lions, E. Magenes', y:'1972', t:'Non-Homogeneous Boundary Value Problems II'},
  { id:'183', l:'en', a:'J.-L. Lions, E. Magenes', y:'1973', t:'Non-Homogeneous Boundary Value Problems III'},
  { id:'256', l:'en', a:'L. Hörmander',            y:'1983', t:'The Analysis of Linear Partial Differential Operators I'},
  { id:'257', l:'en', a:'L. Hörmander',            y:'1983', t:'The Analysis of Linear Partial Differential Operators II'},
  { id:'274', l:'en', a:'L. Hörmander',            y:'1985', t:'The Analysis of Linear Partial Differential Operators III'},
  { id:'275', l:'en', a:'L. Hörmander',            y:'1985', t:'The Analysis of Linear Partial Differential Operators IV'}
]

const Main_Theorem_Data =
[
  { a:'Arzelà-Ascoli_theorem',                                   n:'Arzelà-Ascoli theorem'},
  { a:'Atkinson\'s_theorem',                                     n:'Atkinson\'s theorem'},
  { a:'Bourbaki-Alaoglu_theorem',                                n:'Bourbaki-Alaoglu theorem'},
  { a:'Open_mapping_theorem_(functional_analysis)#Consequences', n:'bounded inverse theorem'},
  { a:'Closed_graph_theorem',                                    n:'closed graph theorem'},
  { a:'Closed_range_theorem',                                    n:'closed range theorem'},
  { a:'Rellich–Kondrachov_theorem',                              n:'Rellich-Kondrachov theorem'},
  { a:'Riesz-Fischer_theorem',                                   n:'Fischer-Riesz theorem'},
  { a:'Fredholm\'s_alternative',                                 n:'Fredholm\'s alternative theorem'},
  { a:'Gelfand–Mazur',                                           n:'Gelfand-Mazur theorem'},
  { a:'Gelfand–Naimark_theorem',                                 n:'Gelfand-Naimark theorem'},
  { a:'Hahn_Banach_theorem',                                     n:'Hahn-Banach theorem'},
  { a:'Hellinger-Toeplitz_theorem',                              n:'Hellinger-Toeplitz theorem'},
  { a:'Hille-Yosida_theorem',                                    n:'Hille-Yosida theorem'},
  { a:'Hölder\'s_inequality',                                    n:'Hölder\'s inequality'},
  { a:'Weak_formulation#The_Lax–Milgram_theorem',                n:'Lax-Milgram theorem'},
  { a:'Lumer-Phillips_theorem',                                  n:'Lumer-Phillips theorem'},
  { a:'Meyers-Serrin_theorem',                                   n:'Meyers-Serrin theorem'},
  { a:'Malgrange-Ehrenpreis_theorem',                            n:'Malgrange-Ehrenpreis theorem'},
  { a:'Milman–Pettis_theorem',                                   n:'Milman-Pettis theorem'},
  { a:'Open_mapping_theorem',                                    n:'open mapping theorem'},
  { a:'Hilbert_projection_theorem',                              n:'projection theorem'},
  { a:'Poincaré_inequality',                                     n:'Poincaré inequality'},
  { a:'Satz_von_Kato-Rellich',                                   n:'Rellich-Kato theorem'},
  { a:'Riesz–Markov–Kakutani_representation_theorem',            n:'Riesz-Markov theorem'},
  { a:'Riesz_representation_theorem',                            n:'Riesz representation theorem'},
  { a:'Schwartz_kernel_theorem',                                 n:'Schwartz kernel theorem'},
  { a:'Spectral_theory_of_compact_operators#Compact_operators',  n:'Riesz-Schauder spectral theorem'},
  { a:'Hilbert-Schmidt_theorem',                                 n:'Hilbert-Schmidt spectral theorem'},
  { a:'spectral_theorem',                                        n:'spectral theorem for self-adjoint operators'},
  { a:'Schauder_fixed-point_theorem',                            n:'Schauder fixpoint theorem'},
  { a:'Sobolev_inequality#Sobolev_embedding_theorem',            n:'Sobolev embedding theorem'},
  { a:'Stone\'s_theorem_on_one-parameter_unitary_groups',        n:'Stone\'s theorem'},
  { a:'Uniform_boundedness_principle',                           n:'uniform boundedness principle'},
  { a:'Von_Neumann\'s_theorem',                                  n:'von Neumann\'s theorem'}
]

const Mathematician_Data =
[
  { n:'Otto Hölder',        b:'1859',d:'1937',c:'Germany',         a:'Otto_Hölder'},
  { n:'David Hilbert',      b:'1862',d:'1943',c:'Germany',         a:'David_Hilbert'},
  { n:'Erik Fredholm',      b:'1866',d:'1927',c:'Sweden',          a:'Erik_Ivar_Fredholm'},
  { n:'Erhard Schmidt',     b:'1876',d:'1958',c:'Germany',         a:'Erhard_Schmidt'},
  { n:'Frigyes Riesz',      b:'1880',d:'1956',c:'Hungary',         a:'Frigyes_Riesz'},
  { n:'Nikolai N. Luzin',   b:'1883',d:'1950',c:'Russia',          a:'Nikolai_Luzin'},
  { n:'Hugo Steinhaus',     b:'1887',d:'1992',c:'Poland',          a:'Hugo_Steinhaus'},
  { n:'Stefan Banach',      b:'1892',d:'1945',c:'Poland',          a:'Stefan_Banach'},
  { n:'Einar Hille',        b:'1894',d:'1980',c:'U.S.A.',          a:'Einar_Hille'},
  { n:'Juliusz Schauder',   b:'1899',d:'1943',c:'Poland',          a:'Juliusz_Schauder'},
  { n:'Salomon Bochner',    b:'1899',d:'1982',c:'U.S.A.',          a:'Salomon_Bochner'},
  { n:'Kurt O. Friedrichs', b:'1901',d:'1982',c:'Germany, U.S.A.', a:'Kurt_Otto_Friedrichs'},
  { n:'John von Neumann',   b:'1903',d:'1957',c:'Hungary',         a:'John_von_Neumann'},
  { n:'Marshall H. Stone',  b:'1903',d:'1989',c:'U.S.A.',          a:'Marshall_H_Stone'},
  { n:'Aurel Wintner',      b:'1903',d:'1958',c:'Hungary, U.S.A.', a:'Aurel_Wintner'},
  { n:'Nelson Dunford',     b:'1906',d:'1986',c:'U.S.A.',          a:'Nelson_Dunford'},
  { n:'Franz Rellich',      b:'1906',d:'1955',c:'Germany',         a:'Franz_Rellich'},
  { n:'Sergei Sobolev',     b:'1908',d:'1989',c:'Russia',          a:'Sergei_Sobolev'},
  { n:'Kosaku Yosida',      b:'1909',d:'1990',c:'Japan',           a:'Kosaku_Yosida'},
  { n:'Israel Gelfand',     b:'1913',d:'2009',c:'Ukrain, U.S.A.',  a:'Israel_Gelfand'},
  { n:'Ralph S. Phillips',  b:'1913',d:'1998',c:'U.S.A.',          a:'Ralph_S._Phillips'},
  { n:'Leonidas Alaoglu',   b:'1914',d:'1981',c:'Canada',          a:'Leonidas_Alaoglu'},
  { n:'Laurent Schwarz',    b:'1915',d:'2002',c:'France',          a:'Laurent_Schwartz'},
  { n:'Tosio Kato',         b:'1917',d:'1999',c:'Japan',           a:'Tosio_Kato'},
  { n:'Shmuel Agmon',       b:'1922',d:'2025',c:'Israel',          a:'Shmuel_Agmon'},
  { n:'Peter Lax',          b:'1926',d:'2025',c:'Hungary, U.S.A.', a:'Peter_Lax'},
  { n:'Felix E. Browder',   b:'1927',d:'2016',c:'U.S.A.',          a:'Felix_Browder'},
  { n:'Jaques-Louis Lions', b:'1928',d:'2001',c:'France',          a:'Jaques-Louis_Lions'},
  { n:'Martin Schechter',   b:'1930',d:'2021',c:'U.S.A.',          a:'Martin_Schechter_(mathematician)'},
  { n:'Lars Hörmander',     b:'1931',d:'2012',c:'Sweden',          a:'Lars_Hörmander'},
]

const Key_Concept_Data =
[
  { a:'Dissipative_operator',                                                       n:'accretive linear operator'},
  { a:'Hermitian_adjoint',                                                          n:'adjoint operator'},
  { a:'Banach_algebra',                                                             n:'Banach algebra'},
  { a:'Banach_space',                                                               n:'Banach space'},
  { a:'Bochner_space',                                                              n:'Bochner space'},
  { a:'Bounded_linear_operator',                                                    n:'bounded linear operator'},
  { a:'Cauchy_sequence',                                                            n:'Cauchy sequence'},
  { a:'Cauchy_problem',                                                             n:'Cauchy problem'},
  { a:'Closed_linear_operator',                                                     n:'closed linear operator'},
  { a:'Compact_linear_operator',                                                    n:'compact linear operator'},
  { a:'Complemented_subspace',                                                      n:'complemented subspace'},
  { a:'Group_algebra_of_a_locally_compact_group#The_convolution_algebra_L1.28G.29', n:'convolution algebra'},
  { a:'C0-semigroup#Contraction_semigroups',                                        n:'contraction semigroup'},
  { a:'C*-algebra',                                                                 n:'C*-algebra'},
  { a:'Differential_operator',                                                      n:'differential operator'},
  { a:'Discrete_spectrum',                                                          n:'discrete spectrum'},
  { a:'Dual_space',                                                                 n:'dual space'},
  { a:'Essential_spectrum',                                                         n:'essential spectrum'},
  { a:'Finite_rank_operator',                                                       n:'finite rank operator'},
  { a:'Fourier_transformation',                                                     n:'Fourier transformation'},
  { a:'Fourier_Plancherel_transformation',                                          n:'Fourier-Plancherel transformation'},
  { a:'Frechet_space',                                                              n:'Fréchet space'},
  { a:'Fredholm_operator',                                                          n:'Fredholm operator'},
  { a:'Functional_calculus',                                                        n:'functional calculus'},
  { a:'Gelfand_representation',                                                     n:'Gelfand representation'},
  { a:'Hilbert_space',                                                              n:'Hilbert space'},
  { a:'Hilbert_Schmidt_operator',                                                   n:'Hilbert-Schmidt operator'},
  { a:'Holomorphic_functional_calculus',                                            n:'holomorphic functional calculus'},
  { a:'Holomorphic_semigroup',                                                      n:'holomorphic semigroup'},
  { a:'Hoelder_space',                                                              n:'Hölder space'},
  { a:'C0-semigroup#Infinitesimal_generator',                                       n:'infinitesimal generator'},
  { a:'Inner_product_space',                                                        n:'inner product space'},
  { a:'Laplace_transformation',                                                     n:'Laplace transformation'},
  { a:'Lp_space',                                                                   n:'Lebesgue space'},
  { a:'Linear_functional',                                                          n:'linear functional'},
  { a:'Linear_operator',                                                            n:'linear operator'},
  { a:'Locally_convex_topological_vector_space',                                    n:'locally convex linear space'},
  { a:'Metric_space',                                                               n:'metric space'},
  { a:'Metrizable_topological_vector_space',                                        n:'metrizable topological linear space'},
  { a:'Normal_linear_operator',                                                     n:'normal linear operator'},
  { a:'Normed_vector_space',                                                        n:'normed linear space'},
  { a:'Orthonormal_basis',                                                          n:'orthonormal basis'},
  { a:'Spectrum_(functional_analysis)#Point_spectrum',                              n:'point spectrum'},
  { a:'Reflexive_space',                                                            n:'reflexive space'},
  { a:'Resolvent_set',                                                              n:'resolvent set'},
  { a:'Schauderbasis',                                                              n:'Schauder basis'},
  { a:'Self-adjoint_operator',                                                      n:'self-adjoint linear operator'},
  { a:'Sesquilinear_form',                                                          n:'sesquilinear form'},
  { a:'Sobolev_space',                                                              n:'Sobolev space'},
  { a:'Spectrum_(functional_analysis)',                                             n:'spectrum'},
  { a:'C0_semigroup',                                                               n:'strongly continuous semigroup'},
  { a:'Topological_vector_space',                                                   n:'topological linear space'},
  { a:'Uniformly_convex_space',                                                     n:'uniformly convex space'},
  { a:'Unitary_operator',                                                           n:'unitary linear operator'}
]

const LN_Data =
[
  { id:' 45', a:'A. Wilansky',         y:'1967', t:'Topics in Functional Analysis'},
  { id:' 56', a:'K. Floret, J. Wloka', y:'1968', t:'Einführung in die Theorie der lokalkonvexen Räume'},
  { id:' 82', a:'J. Wloka',            y:'1969', t:'Grundräume und verallgemeinerte Funktionen'},
  { id:'102', a:'F. Stummel',          y:'1969', t:'Rand- und Eigenwertaufgaben in Sobolewschen Räumen'},
]

const GTM_Data =
[
  { id:'  3', a:'H.H. Schäfer',           y:'1999', t:'Topological Vector Spaces'},
  { id:' 15', a:'S. Berberian',           y:'1974', t:'Lectures in Functional Analysis and Operator Theory'},
  { id:' 68', a:'J. Weidmann',            y:'1989', t:'Linear Operators in Hilbert Spaces'},
  { id:' 96', a:'J. Conway',              y:'1990', t:'A Course in Functional Analysis'},
  { id:'142', a:'S. Lang',                y:'1993', t:'Real and Functional Analysis'},
  { id:'192', a:'F. Hirsch, G. Lacombe',  y:'1999', t:'Elements of Functional Analysis'},
  { id:'253', a:'B. MacCluer',            y:'2009', t:'Elementary Functional Analysis'},
  { id:'265', a:'K. Schmüdgen',           y:'2012', t:'Unbounded Self-adjoint Operators in Hilbert Space'},
  { id:'276', a:'M. Einsiedler, T. Ward', y:'2017', t:'Functional Analysis, Spectral Theory, and Applications'},
]

const Dover_Data =
[
  { a: 'F. Riesz, B. Sz.-Nagy',   t: 'Functional Analysis',                                         y:'1990'},
  { a: 'G. Shilov',               t: 'Elementary Functional Analysis',                              y:'2013'},
  { a: 'G. Bachmann, L. Narici',  t: 'Functional Analysis',                                         y:'2012'},
  { a: 'R.E. Edwards',            t: 'Functional Analysis, Theory and Applications',                y:'2012'},
  { a: 'D.H. Griffel',            t: 'Applied Functional Analysis',                                 y:'2002'},
  { a: 'M. Davis',                t: 'A First Course in Functional Analysis',                       y:'2013'},
  { a: 'A. Kolmogorov, S. Fomin', t: 'Elements of the Theory of Functions and Functional Analysis', y:'1999'},
  { a: 'J.D. Pryce',              t: 'Basic Methods of Linear Functional Analysis',                 y:'2014'},
  { a: 'K. Deimling',             t: 'Nonlinear Functional Analysis',                               y:'2013'},
  { a: 'R. Showalter',            t: 'Hilbert Space Methods in Partial Differential Equations',     y:'2010'},
  { a: 'A. Friedman',             t: 'Foundations of Modern Analysis',                              y:'2010'},
];

const GSM_Data =
[
  { id:'36', a:'M. Schechter',                          t:'Principles of Functional Analysis',               y:'2002'},
  { id:'66', a:'Y. Eidelman, V. Milman, A. Tsolomitis', t:'Functional Analysis: An Introduction',            y:'2004'},
  { id:'116',a:'J. Cerdà',                              t:'Linear Functional Analysis',                      y:'2010'},
  { id:'143',a:'A. Bressan',                            t:'Lecture Notes on Functional Analysis',            y:'2013'},
  { id:'156',a:'M. Haase',                              t:'Functional Analysis: An Elementary Introduction', y:'2014'},
  { id:'166',a:'A. Torchinsky',                         t:'Problems in Real and Functional Analysis',        y:'2015'},
  { id:'191',a:'T. Bühler, D. Salamon',                 t:'Functional Analysis',                             y:'2018'}
]

const Mass_Data =
[
  {a:'M.S. Birman, M.Z. Solomjak',t:'Spectral Theory of Self-Adjoint Operators in Hilbert Space',y:'1987'},
  {a:'F.A. Berezin, M. Shubin' ,  t:'The Schrödinger Equation',                                  y:'1991'}
]

const Journal_Data =
[
  { p:'Elsevier', t:'<a href=\'https://www.sciencedirect.com/journal/advances-in-applied-mathematics\'>Advances in Applied Mathematics</a>', d:'Adv. Appl. Math.'},
  { p:'Elsevier', t:'<a href=\'https://shop.elsevier.com/journals/advances-in-mathematics/0001-8708\'>Advances in Mathematics</a>', d:'Adv. Math.'},
  { p:'Springer', t:'<a href=\'https://link.springer.com/journal/205/volumes-and-issues\'>Archive for Rational Mechanics and Analysis</a>', d:'Arch. Ration. Mech. Anal.'},
  { p:'John Hopkings University Press', t:'<a href=\'https://www.press.jhu.edu/journals/american-journal-mathematics?srsltid=AfmBOopRgk6DPUPowIy2l629LamZyp9dGebwQJd2LgI6FfXZUKFtp3wn\'a>American Journal of Mathematics</a>', d:'Am. J. Math.'},
  { p:'Princeton University, Institute for Advanced Study', t:'<a href=\'https://annals.math.princeton.edu\'>Annals of Mathematics</a>', d:'Ann. Math.'},
  { p:'Elsevier', t:'<a href=\'https://shop.elsevier.com/journals/applied-mathematics-and-computation/0096-3003\'>Applied Mathematics and Computation</a>', d:'Appl. Math. Comput.'},
  { p:'Elsevier', t:'<a href=\'https://shop.elsevier.com/journals/applied-numerical-mathematics/0168-9274\'>Applied Numerical Mathematics</a>', d:'Appl. Numer. Math.'},
  { p:'Polish Academy of Sciences', t:'<a href=\'https://www.impan.pl/en/publishing-house/journals-and-series/fundamenta-mathematicae\'>Fundamentae Mathematicae</a>', d:'Fundam. Math.'},
  { p:'Indiana University', t:'<a href=\'https://www.iumj.indiana.edu/\'>Indiana University Mathematics Journal</a>', d:'Indiana Univ. Math. J.'},
  { p:'Wiley-VCH', t:'<a href=\'https://www.wiley-vch.de/en/shop/journals/296-zamm-2233-en\'>Journal of Applied Mathematics and Mechanics (ZAMM)</a>', d:'J. Appl. Math. Mech.'},
  { p:'American Mathematical Society', t:'<a href=\'https://pubs.ams.org/journals/tran\'>Journal of the American Mathematical Society</a>', d:'J. Am. Math. Soc.'},
  { p:'Elsevier', t:'<a href=\'https://shop.elsevier.com/journals/journal-of-mathematical-analysis-and-applications/0022-247X\'>Journal of Mathematical Analysis and Applications</a>', d:'J. Math. Anal. Appl.'},
  { p:'Theta Foundation Bukarest', t:'<a href=\'https://www.theta.ro/jot.html\'>Journal of Operator Theory</a>', d:'J. Oper. Theory'},
  { p:'Mathematica Scandinavica', t:'<a href=\'https://www.mscand.dk\'>Mathematica Scandinavica</a>', d:'Math. Scand.'},
  { p:'Univity of Osaka and Osaka Metropolitan Univity', t:'<a href=\'\'>Osaka Journal of Mathematics</a>', d:'Osaka Math. J.'},
  { p:'Mathematical Science Publishers', t:'<a href=\'https://msp.org/pjm/2026/343-2/\'>Pacific Journal of Mathematics</a>', d:'Pac. J. Math.'},
  { p:'The Royal Society', t:'<a href=\'https://royalsocietypublishing.org/rstl\'>Philosophical Transactions</a>', d:'Philos. Trans. R. Soc.'},
  { p:'American Mathematical Society', t:'</a href=\'https://pubs.ams.org/journals/proc\'>Proceedings of the American Mathematical Society</a>', d:'Proc. Am. Math. Soc.'},
  { p:'Wiley & Sons', t:'<a href=\'https://onlinelibrary.wiley.com/journal/10970312\'>Communications on Pure and Applied Mathematics</a>', d:'Commun. Pure Appl. Math.'},
  { p:'American Mathematical Society', t:'<a href=\'https://pubs.ams.org/journals/bull\'>Bulletin of the American Mathematical Society</a>', d:'Bull. Am. Math. Soc.'},
  { p:'London Mathematical Society', t:'<a href=\'https://www.lms.ac.uk/publications/plms\'>Proceedings of the London Mathematical Society</a>', d:'Proc. London Math. Soc.'},
  { p:'Society for Industrial and Applied Mathematics', t:'<a href=\'https://www.siam.org/publications/siam-journals/siam-journal-on-applied-mathematics/\'>SIAM Journal on Applied Mathematics</a>', d:'SIAM J. Appl. Math.'},
  { p:'Society for Industrial and Applied Mathematics', t:'<a href=\'https://epubs.siam.org/journal/sjnaam\'>SIAM Journal of Numerical Analysis</a>', d:'SIAM J. Numer. Anal.'},
  { p:'Rocky Mountain Mathematics Consortium', t:'<a href=\'https://rockymountainmathematics.github.io/rmmc/index.html\'>The Rocky Mountain Journal of Mathematics</a>', d:'Rocky Mt. J. Math.'},
  { p:'American Mathematical Society', t:'<a href=\'https://pubs.ams.org/journals/tran\'>Transactions of the American Mathematical Society</a>', d:'Trans. Am. Math. Soc.'},
]

const Book_Data =
[
  { a:'E. Kreyszig',
    t:'<a href=\'https://elearning.alberts.edu.in/wp-content/uploads/2020/07/Kreyszig-Introductory-Functional-Analysis-with-Applications.pdf\'>Introductory Functional Analysis</a>',
    p:'John Wiley & Sons',y:'1978'},
  { a:'T. Kato',
    t:'<a href=\'https://webhomes.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf\'>Perturbation Theory of Linear Operators</a>',
    p:'Springer Grundl.',y:'1966'},
  { a:'W. Rudin',
    t:'<a href=\'https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf\'>Real and Complex Analysis</a>',
    p:'McGraw-Hill, Inc.',y:'1970'},
  { a:'W. Rudin',
    t:'<a href=\'https://59clc.wordpress.com/wp-content/uploads/2012/08/functional-analysis-_-rudin-2th.pdf\'>Functional Analysis</a>',
    p:'McGraw-Hill, Inc.',y:'1991'},
  { a:'H. Brezis',
    t:'<a href=\'https://www.math.utoronto.ca/almut/Brezis.pdf\'>Functional Analysis, Sobolev Spaces and Partial Differential Equations</a>',
    p:'Springer',y:'2010'},
  { a:'K. Yosida' ,t:'Functional Analysis',p:'Springer Grundl.',y:'1980'},
  { a:'S. Agmon' ,t:'Lectures on Elliptic Boundary Value Problems',p:'van Nostrand',y:'1965'},
  { a:'J.-L. Lions' ,t:'Équations différentielles opérationnelles et problèmes aux limites',p:'Springer Grundl.',y:'1961'},
  { a:'E. Hewitt, K. Ross' ,t:'Abstract Harmonic Analysis I',p:'Springer Grundl.',y:'1963'},
  { a:'E. Hewitt, K. Ross' ,t:'Abstract Harmonic Analysis II',p:'Springer Grundl.',y:'1970'},
  { a:'L. Hörmander' ,t:'Linear Partial Differential Operators I',p:'Springer Grundl.',y:'1963'},
  { a:'L. Collatz' ,t:'Functional Analysis und Numerische Mathematik',p:'Springer Grundl.',y:'1964'},
  { a:'W. Greub' ,t:'Multilinear Algebra',p:'Springer Grundl.',y:'1967'},
  { a:'L. Hörmander' ,t:'The Analysis of Linear Partial Differential Operators I',  p:'Springer Grundl.',y:'1983'},
  { a:'L. Hörmander' ,t:'The Analysis of Linear Partial Differential Operators II', p:'Springer Grundl.',y:'1983'},
  { a:'L. Hörmander' ,t:'The Analysis of Linear Partial Differential Operators III',p:'Springer Grundl.',y:'1985'},
  { a:'L. Hörmander' ,t:'The Analysis of Linear Partial Differential Operators IV', p:'Springer Grundl.',y:'1985'},
  { a:'F. Treves' ,t:'Locally convex spaces and linear partial differential equations',p:'Springer Grundl.',y:'1967'},
  { a:'D. Gilbarg, N. Trudinger' ,t:'Elliptic partial differential equations of second order',p:'Springer Grundl.',y:'1967'},
  { a:'M. Reed, B. Simon',
    t:'<a href=\'https://www.astrosen.unam.mx/~aceves/Metodos/ebooks/reed_simon1.pdf\'>Methods of Modern Mathematical Physics I: Functional Analysis</a>',
    p:'Elsevier Science',y:'1980'},
  { a:'M. Reed, B. Simon',
    t:'<a targer=\'_new\' href=\'https://www.astrosen.unam.mx/~aceves/Metodos/ebooks/reed_simon2.pdf\'>Methods of Modern Mathematical Physics II: Fourier Analysis, Self-Adjointness</a>',p:'Elsevier Science',y:'1975'},
  { a:'M. Reed, B. Simon',
    t:'<a href=\'http://lib.ysu.am/disciplines_bk/5d5a3bd50ee039fe7c18a622f4ed1926.pdf\'>Methods of Modern Mathematical Physics III: Scattering Theory</a>',p:'Elsevier Science',y:'1979'},
  { a:'M. Reed, B. Simon' ,t:'Methods of Modern Mathematical Physics IV: Spectral Analysis',p:'Elsevier Science',y:'1978'},
  { a:'N. Dunford, J.T. Schwartz' ,t:'Linear Operators, Part I: General Theory',p:'Interscience Pub.',y:'1957'},
  { a:'N. Dunford, J.T. Schwartz' ,t:'Linear Operators, Part II: Spectral Theory',p:'Interscience Pub.',y:'1961'},
  { a:'N. Dunford, J.T. Schwartz' ,t:'Linear Operators, Part III: Spectral Operators',p:'Interscience Pub.',y:'1967'},
  { a:'J.-L. Lions, E. Magenes' ,t:'Non-Homogeneous Boundary Value Problems I', p: 'Springer Grundl.',y:'1972'},
  { a:'J.-L. Lions, E. Magenes' ,t:'Non-Homogeneous Boundary Value Problems II',p: 'Springer Grundl.',y:'1972'},
  { a:'J.-L. Lions, E. Magenes' ,t:'Non-Homogeneous Boundary Value Problems III',p:'Springer Grundl.',y:'1973'},
  { a:'F. Riesz, B. Sz.-Nagy' ,t:'Functional Analysis',p:'Dover Pub.',y:'1990'},
  { a:'G. Shilov' ,t:'Elementary Functional Analysis',p:'Dover Pub.',y:'2013'},
  { a:'G. Bachmann, L. Narici' ,t:'Functional Analysis',p:'Dover Pub.',y:'2012'},
  { a:'R.E. Edwards' ,t:'Functional Analysis, Theory and Applications',p:'Dover Pub.',y:'2012'},
  { a:'D.H. Griffel' ,t:'Applied Functional Analysis',p:'Dover Pub.',y:'2002'},
  { a:'M. Davis' ,t:'A First Course in Functional Analysis',p:'Dover Pub.',y:'2013'},
  { a:'A. Kolmogorov, S. Fomin' ,t:'Elements of the Theory of Functions and Functional Analysis',p:'Dover Pub.',y:'1999'},
  { a:'J.D. Pryce' ,t:'Basic Methods of Linear Functional Analysis',p:'Dover Pub.',y:'2014'},
  { a:'K. Deimling' ,t:'Nonlinear Functional Analysis',p:'Dover Pub.',y:'2013'},
  { a:'A. Wilansky' ,t:'Topics in Functional Analysis',p:'LNM',y:'1967'},
  { a:'K. Floret, J. Wloka' ,t:'Einführung in die Theorie der lokalkonvexen Räume',p:'LNM',y:'1968'},
  { a:'J. Wloka' ,t:'Grundräume und verallgemeinerte Funktionen',p:'LNM',y:'1969'},
  { a:'F. Stummel' ,t:'Rand- und Eigenwertaufgaben in Sobolewschen Räumen',p:'LNM',y:'1969'},
  { a:'M. Schechter' ,t:'Principles of Functional Analysis',p:'AMS (GSM)',y:'2002'},
  { a:'M. Schechter' ,t:'Spectra of partial differential operators',p:'North Holland',y:'1971'},
  { a:'M. Schechter' ,t:'Modern methods in partial differential equations',p:'McGraw-Hill, Inc.',y:'1977'},
  { a:'R. Showalter' ,t:'Hilbert Space Methods in Partial Differential Equations',p:'Dover Pub.',y:'2010'},
  { a:'E. Hille, R.S. Phillips' ,t:'Functional analysis and semi-groups',p:'AMS',y:'1948'},
  { a:'K.-J. Engel, R. Nagel' ,t:'One-Parameter Semigroups for Linear Evolution Equations',p:'Springer',y:'2000'},
  { a:'K.-J. Engel, R. Nagel' ,t:'A Short Course on Operator Semigroups',p:'Springer',y:'2006'},
  { a:'A. Pazy' ,t:'Semigroups of Linear Operators and Applications to PDEs',p:'Springer',y:'1983'},
  { a:'P. Lax' ,t:'Functional Analysis',p:'John Wiley & Sons',y:'2002'},
  { a:'A. Friedman' ,t:'Foundations of Modern Analysis',p:'Dover Pub.',y:'2010'},
  { a:'V. Hutson, J.S. Pym, M. Cloud' ,t:'Applications of Functional Analysis and Operator Theory',p:'Elsevier Science',y:'2005'},
  { a:'S. Lang' ,t:'Real and Functional Analysis',p:'Springer GTM',y:'1993'},
  { a:'J. Conway' ,t:'A Course in Functional Analysis',p:'Springer GTM',y:'1990'},
  { a:'S. Berberian' ,t:'Lectures in Functional Analysis and Operator Theory',p:'GTM',y:'1974'},
  { a:'F. Hirsch, G. Lacombe' ,t:'Elements of Functional Analysis',p:'GTM',y:'1999'},
  { a:'M. Einsiedler, T. Ward' ,t:'Functional Analysis, Spectral Theory, and Applications',p:'GTM',y:'2017'},
  { a:'B. MacCluer' ,t:'Elementary Functional Analysis',p:'GTM',y:'2009'},
  { a:'A. Taylor, D. Lay' ,t:'Functional Analysis',p:'John Wiley & Sons',y:'1980'},
  { a:'T. Bühler, D. Salamon' ,t:'Functional Analysis',p:'AMS',y:'2018'},
  { a:'H. Triebel' ,t:'Higher Analysis',p:'Dt. Verlag. der Wiss.',y:'1991'},
  { a:'R. Zimmer' ,t:'Essential Results of Functional Analysis',p:'Chicago Lectures',y:'1990'},
  { a:'K. Schmüdgen' ,t:'Unbounded Self-adjoint Operators in Hilbert Space',p:'GTM',y:'2012'},
  { a:'J. Weidmann' ,t:'Linear Operators in Hilbert Spaces',p:'GTM',y:'1980'},
  { a:'M.S. Birman, M.Z. Solomjak' ,t:'Spectral Theory of Self-Adjoint Operators in Hilbert Space',p:'MASS',y:'1987'},
  { a:'S.G. Krein' ,t:'Linear Equations in Banach Spaces',p:'Birkhäuser',y:'1982'},
  { a:'S.G. Krein' ,t:'Linear Differential Equations in Banach Spaces',p:'AMS',y:'1972'},
  { a:'M. Miclavcic' ,t:'Applied Functional Analysis and Differential Equations',p:'World Scientific Pub.',y:'1998'},
  { a:'W. Rudin' ,t:'Fourier Analysis on Groups',p:'John Wiley & Sons',y:'1962'},
  { a:'N.I. Akhiezer, I.M. Glazman' ,t:'Theory of Linear Operators in Hilbert Space',p:'Dover Pub.',y:'1963'},
  { a:'E. Zeidler' ,t:'Nonlinear Functional Analysis and its Applications. I: Fixpoint Theorems',p:'Springer',y:'1985'},
  { a:'E. Zeidler' ,t:'Nonlinear Functional Analysis and its Applications. IIA: Linear Monotone Operators',p:'Springer',y:'1990'},
  { a:'E. Zeidler' ,t:'Nonlinear Functional Analysis and its Applications. IIB: Nonlinear Monotone Operators',p:'Springer',y:'1989'},
  { a:'E. Zeidler' ,t:'Nonlinear Functional Analysis and its Applications. III: Variational Methods and Optimization',p:'Springer',y:'1985'},
  { a:'E. Zeidler' ,t:'Nonlinear Functional Analysis and its Applications. IV: Applications to Mathematical Physics',p:'Springer',y:'1988'},
  { a:'S. Kesavan' ,t:'Nonlinear Functional Analysis: A First Course',p:'Springer',y:'2022'},
  { a:'Y. Eidelman, V. Milman, A. Tsolomitis', t:'Functional Analysis: An Introduction', p:'GSM', y:'2004'},
  { a:'M. Haase',   t:'Functional Analysis: An Elementary Introduction', p:'GSM',  y:'2014'},
  { a:'A. Bressan', t:'Lecture Notes on Functional Analysis',            p:'GSM',  y:'2013'},
  { a:'G. Köthe',    t:'Topological Vector Spaces I-II', p:'Springer Verlag', y:'1969'},
  { a:'A. Wilansky', t:'Modern Methods in Topological Vector Space', p:'Dover', y: '2013'},
  { a:'J. Horváth',  t:'Topological Vector Spaces and Distributions', p:'Dover', y: '2012'},
  { a:'F. Trèves',   t:'Topological Vector Spaces, Distributions and Kernels', p:'Elsevier', y:'2016'},
  { a:'H. Schäfer', t:'Topological Vector Spaces', p:'Springer Verlag', y:'1971'},
  { a:'L. Narici, E. Beckenstein', t:'Topological Vector Spaces', p:'Chapman & Hall', y:'2024'}
]

const MSC46_Data =
[
  { c: '46-XX', n: 'Functional analysis'},
  { c: '46-00', n: 'General reference works (handbooks, dictionaries, bibliographies, etc.) pertaining to functional analysis'},
  { c: '46-01', n: 'Introductory exposition (textbooks, tutorial papers, etc.) pertaining to functional analysis'},
  { c: '46-02', n: 'Research exposition (monographs, survey articles) pertaining to functional analysis'},
  { c: '46-03', n: 'History of functional analysis'},
  { c: '46-04', n: 'Software, source code, etc. for problems pertaining to functional analysis'},
  { c: '46-06', n: 'Proceedings, conferences, collections, etc. pertaining to functional analysis'},
  { c: '46-08', n: 'Computational methods for problems pertaining to functional analysis'},
  { c: '46-11', n: 'Research data for problems pertaining to functional analysis'},
  { c: '46Axx', n: 'Topological linear spaces and related structures'},
  { c: '46A03', n: 'General theory of locally convex spaces'},
  { c: '46A04', n: 'Locally convex Fréchet spaces and (DF)-spaces'},
  { c: '46A08', n: 'Barrelled spaces, bornological spaces'},
  { c: '46A11', n: 'Spaces determined by compactness or summability properties (nuclear spaces, Schwartz spaces, Montel spaces, etc.)'},
  { c: '46A13', n: 'Spaces defined by inductive or projective limits (LB, LF, etc.)'},
  { c: '46A16', n: 'Not locally convex spaces (metrizable topological linear spaces, locally bounded spaces, quasi-Banach spaces, etc.)'},
  { c: '46A17', n: 'Bornologies and related structures; Mackey convergence, etc.'},
  { c: '46A19', n: 'Other topological linear spaces (convergence spaces, ranked spaces, spaces with a metric taking values in an ordered structure more general than <b>R</b>, etc.)'},
  { c: '46A20', n: 'Duality theory for topological vector spaces'},
  { c: '46A22', n: 'Theorems of Hahn-Banach type; extension and lifting of functionals and operators'},
  { c: '46A25', n: 'Reflexivity and semi-reflexivity'},
  { c: '46A30', n: 'Open mapping and closed graph theorems; completeness (including B-, B<sub>r</sub>-completeness)'},
  { c: '46A32', n: 'Spaces of linear operators; topological tensor products; approximation properties'},
  { c: '46A35', n: 'Summability and bases in topological vector spaces'},
  { c: '46A40', n: 'Ordered topological linear spaces, vector lattices'},
  { c: '46A45', n: 'Sequence spaces (including Köthe sequence spaces)'},
  { c: '46A50', n: 'Compactness in topological linear spaces; angelic spaces, etc.'},
  { c: '46A55', n: 'Convex sets in topological linear spaces; Choquet theory'},
  { c: '46A61', n: 'Graded Fréchet spaces and tame operators'},
  { c: '46A63', n: 'Topological invariants for locally convex spaces'},
  { c: '46A70', n: 'Saks spaces and their duals (strict topologies, mixed topologies, two-norm spaces, co-Saks spaces, etc.)'},
  { c: '46A80', n: 'Modular spaces'},
  { c: '46A99', n: 'None of the above, but in this section'},
  { c: '46Bxx', n: 'Normed linear spaces and Banach spaces; Banach lattices'},
  { c: '46B03', n: 'Isomorphic theory (including renorming) of Banach spaces'},
  { c: '46B04', n: 'Isometric theory of Banach spaces'},
  { c: '46B06', n: 'Asymptotic theory of Banach spaces'},
  { c: '46B07', n: 'Local theory of Banach spaces'},
  { c: '46B08', n: 'Ultraproduct techniques in Banach space theory'},
  { c: '46B09', n: 'Probabilistic methods in Banach space theory'},
  { c: '46B10', n: 'Duality and reflexivity in normed linear and Banach spaces'},
  { c: '46B15', n: 'Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces'},
  { c: '46B20', n: 'Geometry and structure of normed linear spaces'},
  { c: '46B22', n: 'Radon-Nikodým, Kreın-Milman and related properties'},
  { c: '46B25', n: 'Classical Banach spaces in the general theory'},
  { c: '46B26', n: 'Nonseparable Banach spaces'},
  { c: '46B28', n: 'Spaces of operators; tensor products; approximation properties'},
  { c: '46B40', n: 'Ordered normed spaces'},
  { c: '46B42', n: 'Banach lattices'},
  { c: '46B45', n: 'Banach sequence spaces'},
  { c: '46B50', n: 'Compactness in Banach (or normed) spaces'},
  { c: '46B70', n: 'Interpolation between normed linear spaces'},
  { c: '46B80', n: 'Nonlinear classification of Banach spaces; nonlinear quotients'},
  { c: '46B85', n: 'Embeddings of discrete metric spaces into Banach spaces; applications in topology and computer science'},
  { c: '46B87', n: 'Lineability in functional analysis'},
  { c: '46B99', n: 'None of the above, but in this section'},
  { c: '46Cxx', n: 'Inner product spaces and their generalizations, Hilbert spaces'},
  { c: '46C05', n: 'Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)'},
  { c: '46C07', n: 'Hilbert subspaces (= operator ranges); complementation (Aronszajn, de Branges, etc.)'},
  { c: '46C15', n: 'Characterizations of Hilbert spaces'},
  { c: '46C20', n: 'Spaces with indefinite inner product (Kre?n spaces, Pontryagin spaces, etc.)'},
  { c: '46C50', n: 'Generalizations of inner products (semi-inner products, partial inner products, etc.)'},
  { c: '46C99', n: 'None of the above, but in this section'},
  { c: '46Exx', n: 'Linear function spaces and their duals'},
  { c: '46E05', n: 'Lattices of continuous, differentiable or analytic functions'},
  { c: '46E10', n: 'Topological linear spaces of continuous, differentiable or analytic functions'},
  { c: '46E15', n: 'Banach spaces of continuous, differentiable or analytic functions'},
  { c: '46E20', n: 'Hilbert spaces of continuous, differentiable or analytic functions'},
  { c: '46E22', n: 'Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)'},
  { c: '46E25', n: 'Rings and algebras of continuous, differentiable or analytic functions'},
  { c: '46E27', n: 'Spaces of measures'},
  { c: '46E30', n: 'Spaces of measurable functions (L<sup>p</sup>-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)'},
  { c: '46E35', n: 'Sobolev spaces and other spaces of smooth functions, embedding theorems, trace theorems'},
  { c: '46E36', n: 'Sobolev (and similar kinds of) spaces of functions on metric spaces; analysis on metric spaces'},
  { c: '46E39', n: 'Sobolev (and similar kinds of) spaces of functions of discrete variables'},
  { c: '46E40', n: 'Spaces of vector- and operator-valued functions'},
  { c: '46E50', n: 'Spaces of differentiable or holomorphic functions on infinite-dimensional spaces'},
  { c: '46E99', n: 'None of the above, but in this section'},
  { c: '46Fxx', n: 'Distributions, generalized functions, distribution spaces'},
  { c: '46F05', n: 'Topological linear spaces of test functions, distributions and ultradistributions'},
  { c: '46F10', n: 'Operations with distributions and generalized functions'},
  { c: '46F12', n: 'Integral transforms in distribution spaces'},
  { c: '46F15', n: 'Hyperfunctions, analytic functionals'},
  { c: '46F20', n: 'Distributions and ultradistributions as boundary values of analytic functions'},
  { c: '46F25', n: 'Distributions on infinite-dimensional spaces'},
  { c: '46F30', n: 'Generalized functions for nonlinear analysis (Rosinger, Colombeau, nonstandard, etc.)'},
  { c: '46F99', n: 'None of the above, but in this section'},
  { c: '46Gxx', n: 'Measures, integration, derivative, holomorphy (all involving infinite-dimensional spaces)'},
  { c: '46G05', n: 'Derivatives of functions in infinite-dimensional spaces'},
  { c: '46G10', n: 'Vector-valued measures and integration'},
  { c: '46G12', n: 'Measures and integration on abstract linear spaces'},
  { c: '46G15', n: 'Functional analytic lifting theory'},
  { c: '46G20', n: 'Infinite-dimensional holomorphy'},
  { c: '46G25', n: '(Spaces of) multilinear mappings, polynomials'},
  { c: '46G99', n: 'None of the above, but in this section)'},
  { c: '46Hxx', n: 'Topological algebras, normed rings and algebras, Banach algebras'},
  { c: '46H05', n: 'General theory of topological algebras'},
  { c: '46H10', n: 'Ideals and subalgebras'},
  { c: '46H15', n: 'Representations of topological algebras'},
  { c: '46H20', n: 'Structure, classification of topological algebras'},
  { c: '46H25', n: 'Normed modules and Banach modules, topological modules (if not placed in 13-XX or 16-XX)'},
  { c: '46H30', n: 'Functional calculus in topological algebras'},
  { c: '46H35', n: 'Topological algebras of operators'},
  { c: '46H40', n: 'Automatic continuity'},
  { c: '46H70', n: 'Nonassociative topological algebras'},
  { c: '46H99', n: 'None of the above, but in this section'},
  { c: '46Jxx', n: 'Commutative Banach algebras and commutative topological algebras'},
  { c: '46J05', n: 'General theory of commutative topological algebras'},
  { c: '46J10', n: 'Banach algebras of continuous functions, function algebras'},
  { c: '46J15', n: 'Banach algebras of differentiable or analytic functions, H<sup>p</sup>-spaces'},
  { c: '46J20', n: 'Ideals, maximal ideals, boundaries'},
  { c: '46J25', n: 'Representations of commutative topological algebras'},
  { c: '46J30', n: 'Subalgebras of commutative topological algebras'},
  { c: '46J40', n: 'Structure and classification of commutative topological algebras'},
  { c: '46J45', n: 'Radical Banach algebras'},
  { c: '46J99', n: 'None of the above, but in this section'},
  { c: '46Kxx', n: 'Topological (rings and) algebras with an involution'},
  { c: '46K05', n: 'General theory of topological algebras with involution'},
  { c: '46K10', n: 'Representations of topological algebras with involution'},
  { c: '46K15', n: 'Hilbert algebras'},
  { c: '46K50', n: 'Nonselfadjoint (sub)algebras in algebras with involution'},
  { c: '46K70', n: 'Nonassociative topological algebras with an involution'},
  { c: '46K99', n: 'None of the above, but in this section'},
  { c: '46Lxx', n: 'Selfadjoint operator algebras (C*-algebras, von Neumann (W*-) algebras, etc.)'},
  { c: '46L05', n: 'General theory of C*-algebras'},
  { c: '46L06', n: 'Tensor products of C*-algebras'},
  { c: '46L07', n: 'Operator spaces and completely bounded maps [See also 47L25]'},
  { c: '46L08', n: 'C*-modules'},
  { c: '46L09', n: 'Free products of C*-algebras'},
  { c: '46L10', n: 'General theory of von Neumann algebras'},
  { c: '46L30', n: 'States of selfadjoint operator algebras'},
  { c: '46L35', n: 'Classifications of C*-algebras'},
  { c: '46L36', n: 'Classification of factors'},
  { c: '46L37', n: 'Subfactors and their classification'},
  { c: '46L40', n: 'Automorphisms of selfadjoint operator algebras'},
  { c: '46L45', n: 'Decomposition theory for C*-algebras'},
  { c: '46L51', n: 'Noncommutative measure and integration'},
  { c: '46L52', n: 'Noncommutative function spaces'},
  { c: '46L53', n: 'Noncommutative probability and statistics'},
  { c: '46L54', n: 'Free probability and free operator algebras'},
  { c: '46L55', n: 'Noncommutative dynamical systems'},
  { c: '46L57', n: 'Derivations, dissipations and positive semigroups in C*-algebras'},
  { c: '46L60', n: 'Applications of selfadjoint operator algebras to physics'},
  { c: '46L65', n: 'Quantizations, deformations for selfadjoint operator algebras'},
  { c: '46L67', n: 'Quantum groups (operator algebraic aspects)'},
  { c: '46L70', n: 'Nonassociative selfadjoint operator algebras'},
  { c: '46L80', n: 'K-theory and operator algebras (including cyclic theory)'},
  { c: '46L85', n: 'Noncommutative topology'},
  { c: '46L87', n: 'Noncommutative differential geometry'},
  { c: '46L89', n: 'Other noncommutative mathematics based on C*-algebra theory'},
  { c: '46L99', n: 'None of the above, but in this section'},
  { c: '46Mxx', n: 'Methods of category theory in functional analysis'},
  { c: '46M05', n: 'Tensor products in functional analysis'},
  { c: '46M07', n: 'Ultraproducts in functional analysis'},
  { c: '46M10', n: 'Projective and injective objects in functional analysis'},
  { c: '46M15', n: 'Categories, functors in functional analysis'},
  { c: '46M18', n: 'Homological methods in functional analysis (exact sequences, right inverses, lifting, etc.)'},
  { c: '46M20', n: 'Methods of algebraic topology in functional analysis (cohomology, sheaf and bundle theory, etc.)'},
  { c: '46M35', n: 'Abstract interpolation of topological vector spaces'},
  { c: '46M40', n: 'Inductive and projective limits in functional analysis'},
  { c: '46M99', n: 'None of the above, but in this section'},
  { c: '46Nxx', n: 'Miscellaneous applications of functional analysis'},
  { c: '46N10', n: 'Applications of functional analysis in optimization, convex analysis, mathematical programming, economics'},
  { c: '46N20', n: 'Applications of functional analysis to differential and integral equations'},
  { c: '46N30', n: 'Applications of functional analysis in probability theory and statistics'},
  { c: '46N40', n: 'Applications of functional analysis in numerical analysis'},
  { c: '46N50', n: 'Applications of functional analysis in quantum physics'},
  { c: '46N55', n: 'Applications of functional analysis in statistical physics'},
  { c: '46N60', n: 'Applications of functional analysis in biology and other sciences'},
  { c: '46N99', n: 'None of the above, but in this section'},
  { c: '46Sxx', n: 'Other (nonclassical) types of functional analysis'},
  { c: '46S05', n: 'Quaternionic functional analysis'},
  { c: '46S10', n: 'Functional analysis over fields other than <b>R</b> or <b>C</b> or the quaternions; non-Archimedean functional analysis'},
  { c: '46S20', n: 'Nonstandard functional analysis'},
  { c: '46S30', n: 'Constructive functional analysis'},
  { c: '46S40', n: 'Fuzzy functional analysis'},
  { c: '46S50', n: 'Functional analysis in probabilistic metric linear spaces'},
  { c: '46S60', n: 'Functional analysis on superspaces (supermanifolds) or graded spaces'},
  { c: '46S99', n: 'None of the above, but in this section'},
  { c: '46Txx', n: 'Nonlinear functional analysis'},
  { c: '46T05', n: 'Infinite-dimensional manifolds'},
  { c: '46T10', n: 'Manifolds of mappings'},
  { c: '46T12', n: 'Measure (Gaussian, cylindrical, etc.) and integrals (Feynman, path, Fresnel, etc.) on manifolds'},
  { c: '46T20', n: 'Continuous and differentiable maps in nonlinear functional analysis'},
  { c: '46T25', n: 'Holomorphic maps in nonlinear functional analysis'},
  { c: '46T30', n: 'Distributions and generalized functions on nonlinear spaces'},
  { c: '46T99', n: 'None of the above, but in this section'},
];

/*----------------------------------------------------------------------------*/
/* undisplayAllContainers(), displayContainer()                               */
/*----------------------------------------------------------------------------*/
function undisplayAllContainers()
{
  for(i=0; i < Menu_Data.length; i++)
  {
    let element = document.getElementById(Menu_Data[i]);
    if(element != null)
      element.style.display = 'none';
  }
}

function displayContainer(id)
{
  undisplayAllContainers();
  let element = document.getElementById(id);
  if(element != null)
    element.style.display = 'block';
}

/*----------------------------------------------------------------------------*/
/* createTable(), fillTable()                                                 */
/*----------------------------------------------------------------------------*/
function createTable(title,classname)
{
  let table = new $('#'+classname+'-table').DataTable({pageLength:6});
/*
  if(title != "")
    table.caption('--- ' + title + ' ---','top');
  else
    table.caption('','top');
*/
  table.select.style('single');

  table.on('click', 'tbody tr', function (e)
  {
    let classList = e.currentTarget.classList;

    if (classList.contains('selected'))
      classList.remove('selected');
    else
    {
      table.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
      classList.add('selected');
    }
  });

  if(classname == 'isem')
  {
    for(i=0; i < Isem_Scripts.length; i++)
      table.row.add([Isem_Scripts[i].id,
                     Isem_Scripts[i].t,
                     Isem_Scripts[i].y]);
  }

  if(classname == 'Grundlehren')
  {
    for(i=0; i < GL_Data.length; i++)
      table.row.add([GL_Data[i].id,
                     GL_Data[i].l,
                     GL_Data[i].a,
                     GL_Data[i].t,
                     GL_Data[i].y]);
  }

  if(classname == 'Mathematician')
  {
    for(i=0; i < Mathematician_Data.length; i++)
      table.row.add([Mathematician_Data[i].n,
                     Mathematician_Data[i].b,
                     Mathematician_Data[i].d,
                     Mathematician_Data[i].c]);
  }

  if(classname == 'lecture_notes')
  {
    for(i=0; i < LN_Data.length; i++)
      table.row.add([LN_Data[i].id,
                     LN_Data[i].a,
                     LN_Data[i].t,
                     LN_Data[i].y]);
  }

  if(classname == 'gtm')
  {
    for(i=0; i < GTM_Data.length; i++)
      table.row.add([GTM_Data[i].id,
                     GTM_Data[i].a,
                     GTM_Data[i].t,
                     GTM_Data[i].y]);
  }

  if(classname == 'gsm')
  {
    for(i=0; i < GSM_Data.length; i++)
      table.row.add([GSM_Data[i].id,
                     GSM_Data[i].a,
                     GSM_Data[i].t,
                     GSM_Data[i].y]);
  }

  if(classname == 'mass')
  {
    for(i=0; i < Mass_Data.length; i++)
      table.row.add([Mass_Data[i].a,
                     Mass_Data[i].t,
                     Mass_Data[i].y]);
  }

  if(classname == 'dover')
  {
    for(i=0; i < Dover_Data.length; i++)
      table.row.add([Dover_Data[i].a,
                     Dover_Data[i].t,
                     Dover_Data[i].y]);
  }

  if(classname == 'Book')
  {
    for(i=0; i < Book_Data.length; i++)
      table.row.add([Book_Data[i].a,
                     Book_Data[i].t,
                     Book_Data[i].p,
                     Book_Data[i].y]);
  }

  if(classname == 'Journal')
  {
    for(i=0; i < Journal_Data.length; i++)
      table.row.add([Journal_Data[i].t,
                     Journal_Data[i].p,
                     Journal_Data[i].d]);
  }

  if(classname == 'msc46')
  {
    for(i=0; i < MSC46_Data.length; i++)
      table.row.add([MSC46_Data[i].c,
                     MSC46_Data[i].n]);
  }

  table.draw();
}

/*----------------------------------------------------------------------------*/
/* fill list elements                                                         */
/*----------------------------------------------------------------------------*/
const wiki_base = 'https:\/\/en.wikipedia.org\/wiki\/';

function fillListOfMainTheorems()
{
  const list_element = document.getElementById('main_theorem_list');
  for(let i=0; i < Main_Theorem_Data.length;i++)
  {
    const text     = Main_Theorem_Data[i].n;
    const textNode = document.createTextNode(text);
    const a_Node   = document.createElement('a');
    const li_Node  = document.createElement('li');
    a_Node.appendChild(textNode);
    a_Node.setAttribute('href',wiki_base + Main_Theorem_Data[i].a);
    a_Node.setAttribute('target','_new');
    li_Node.appendChild(a_Node);
    list_element.appendChild(li_Node);
  }
}

function fillListOfKeyConcepts()
{
  const list_element = document.getElementById('key_concept_list');
  for(let i=0; i < Key_Concept_Data.length;i++)
  {
    const text     = Key_Concept_Data[i].n;
    const textNode = document.createTextNode(text);
    const a_Node   = document.createElement('a');
    const li_Node  = document.createElement('li');
    a_Node.appendChild(textNode);
    a_Node.setAttribute('href',wiki_base + Key_Concept_Data[i].a);
    a_Node.setAttribute('target','_new');
    li_Node.appendChild(a_Node);
    list_element.appendChild(li_Node);
  }
}

function fillListOfMathematicians()
{
  const list_element = document.getElementById('mathematician_list');
  for(let i=0; i < Mathematician_Data.length;i++)
  {
    const text     = Mathematician_Data[i].n + ' (' 
                   + Mathematician_Data[i].b + '-'
                   + Mathematician_Data[i].d + ')';
    const textNode = document.createTextNode(text);
    const a_Node   = document.createElement('a');
    const li_Node  = document.createElement('li');
    a_Node.appendChild(textNode);
    a_Node.setAttribute('href',wiki_base + Mathematician_Data[i].a);
    a_Node.setAttribute('target','_new');
    li_Node.appendChild(a_Node);
    list_element.appendChild(li_Node);
  }
}

/*----------------------------------------------------------------------------*/
/* Topics Tree                                                                */
/*----------------------------------------------------------------------------*/
function hasSubtopics(topic)
{
  let length = 0;
  for(let j=0;j < Topics_Data.length;j++)
   if(Topics_Data[j].p == topic.c)
     length++;
  return length;
}

function insertNode(node,topic,level)
{
  const textNode = document.createTextNode(topic.t);
  if(hasSubtopics(topic) == 0)
  {
    const newNode = document.createElement('li');
    newNode.style.setProperty('margin-left','9px');
    newNode.style.setProperty('color','black');
    newNode.style.setProperty('font-weight','normal');
    newNode.appendChild(textNode);
    node.appendChild(newNode);
  }
  else
  {
    const summary = document.createElement('summary');
    summary.appendChild(textNode)
    const details = document.createElement('details');
    if(level <= 1)
      details.open = true;
    details.appendChild(summary)
    node.appendChild(details)

    const newNode = document.createElement('ol');
    newNode.style.setProperty('list-style-type','none');
    newNode.style.setProperty('margin-top','0px');
    newNode.style.setProperty('margin-bottom','0px');
    newNode.style.setProperty('font-weight','normal');
    newNode.style.setProperty('color','darkblue');
    details.appendChild(newNode)
    if(topic.t =='root')
    {
      summary.style.setProperty('color','gray');
      newNode.style.setProperty('text-align','left');
    }

    for(let k=1;k < Topics_Data.length;k++)
    {
      child = Topics_Data[k];
      if(child.p == topic.c)
        insertNode(newNode,child,level+1)
    }
  }
}

function TopicsTree()
{
  const start = Date.now();
  const intro_text1 = 'This is an approach to classify the many topics in functional analysis by a tree structure. '
  const intro_text2 = 'It may serve as a table of contents for textbooks.';
  const root_div = document.getElementById('topic_tree');
  const textNode = document.createTextNode(intro_text1 + intro_text2);
  const newNode = document.createElement('p');
  newNode.style.setProperty('font-weight','normal');
  newNode.appendChild(textNode);
  root_div.appendChild(newNode);

  if(root_div != null)
  {
    root_div.style.setProperty('font-weight','bold');
    insertNode(root_div,Topics_Data[0],1);
    const end = Date.now();
    const seconds = (end - start);
    console.log('computation of topics tree finished after ' + seconds + ' ms.')
  }
  else
    console.log('element with id=\'topic_tree\* does not exist.')
}

/*----------------------------------------------------------------------------*/
/* appendContent()                                                            */
/*----------------------------------------------------------------------------*/
/*
function appendContent(id,text)
{
  const p = document.createElement("p");
  p.textContent = text;
  document.querySelector(id).appendChild(p);
}
*/

/*----------------------------------------------------------------------------*/
/* call main functions                                                        */
/*----------------------------------------------------------------------------*/
createTable('Journals', 'Journal');
createTable('Textbooks', 'Book');
createTable('Monographs in \'Grundlehren der mathematischen Wissenschaften in Einzeldarstellung\'', 'Grundlehren');
createTable('Functional Analysis Textbooks in \'Dover Publications\'', 'dover');
createTable('Functional Analysis Textbooks in Springer\'s \'Graduate Texts in Mathematics\' (GTM)', 'gtm');
createTable('Functional Analysis Textbooks in \'Graduate Studies in Mathematics\' (GSM), by AMS', 'gsm');
createTable('Internet Seminars on Evolution Equations', 'isem');
createTable('Monographs in \'Lecture Notes in Mathematics (Springer)\'', 'lecture_notes');
createTable('Mathematics and its Applications', 'mass');
createTable('MSC2020 Entries', 'msc46');
fillListOfMathematicians();
fillListOfMainTheorems();
fillListOfKeyConcepts();
// TopicsTree();
displayContainer('home');
