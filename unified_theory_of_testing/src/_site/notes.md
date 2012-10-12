* from http://ocw.jhsph.edu/courses/fundepi/PDFs/Lecture11.pdf
  - __Validity__: The ability of a test to indicate which individuals 
have the disease and which do not
  - __Sensitivity__: The ability of the test to identify correctly those who have
the disease
  - __Specificity__: The ability of the test to identify correctly those who do 
not have the disease
  - _a_ is true positives, _b_ is test positive but disease negative, _c_ is test negative but disease postiive, and _d_ is true negatives
  - sensitivity = a/(a+c) = (true positive / disease+) = Pr(T+|D+)
  - specificity = d/(b+d) = (true negative / disease-) = Pr(T-|D-)
  - reproducibility, repeatability, reliability
  - variation
    - intra-subject variation
      - variation in results of a test subject over a short period of time
      - due to changes (physiological, environmental, etc.)
    - intra-observer variation
      - same observer, different times
    - inter-observer variation
      - due to multiple observers

* from http://www.youtube.com/watch?v=4ZW32lUH0Uk
  - Screening Tests: Properties
    - __Simplicity__: test should be easy to administer
    - __Acceptability__: Test should be likely to ensure high cooperation by those screened
    - __Economy__: Test should maximize cost-benefit ratio of the screening program
    - Validity: Test should provide a true measurement of attribute being sought
    - __Reliability__: Test should yield reproducible results
    - __Efficacy__: Test should be effective in reducing mortality and morbidity
  - __Sensitivity__: the probability of testing positive if the disease is truly present
  - __Specificity__: Probability of screening negative if the disease is truly absent
  - optimize sensitivity when penalty of missing a case is severe, disease can be spread , or when subsequent evaluations pose minimal cost and risk
  - optimize specificity when costs/risks of further diagnosis are substantial

* from http://medical-dictionary.thefreedictionary.com/validity
 - validity [vah-lid´ĭ-te]
    - the extent to which a measuring device measures what it intends or purports to measure.
    - __construct validity__ the degree to which an instrument measures the characteristic being investigated; the extent to which the conceptual definitions match the operational definitions.
    - __content validity__ verification that the method of measurement actually measures what it is expected to measure; see also face validity.
    - __external validity__ the extent to which study findings can be generalized beyond the sample used in the study.
    - __face validity__ a type of content validity, determining the suitability of a given instrument as a source of data on the subject under investigation, using common-sense criteria.
    - __internal validity__ the extent to which the effects detected in a study are truly caused by the treatment or exposure in the study sample, rather than being due to other biasing effects of extraneous variables.
    - __predictive validity__ the effectiveness of one set of test or research results as a predictor of the outcome of future experiments or tests.


* The infeasibility of experimental quantification of life-critical software reliability
  - Butler & Finelli
  - Abstract- This paper affirms that the quantification of life- critical software reliability is infeasible using statistical methods, whether these methods are applied to standard software or fault- tolerant software. The classical methods of estimating reliability are shown to lead to exorbitant amounts of testing when applied to life-critical software. Reliability growth models are examined and also shown to be incapable of overcoming the need for excessive amounts of testing. The key assumption of software fault tolerance-separately programmed versions fail indepen- dently-is shown to be problematic. This assumption cannot be justified by experimentation in the ultrareliability region, and subjective arguments in its favor are not sufficiently strong to justify it as an axiom. Also, the implications of the recent multiversion software experiments support this affirmation. Index Terms- Design error, life-critical, software fault toler- ance, software reliability, ultrareliability, validation. 

* http://sethgodin.typepad.com/seths_blog/2011/11/when-minimal-viable-product-doesnt-work.html
  - argues that there are a class of products that require a marketing blitz, so these suffer from trying out an MVP
  - I argue that for those products, the MVP includes marketing, and that maybe Seth Godin doesn't understand Lean?
  - "Often, for software we use in public, this definition leads to failure. Why? Two reasons:"
    1. marketing plays by different rules than engineering
    1. burst of energy & attention accompanies launch
  - I argue that MVPs *should* fail. If you're working on a failed product (and chances are good that you are), it may be better to give up early.
    - need a test that can fail: if every test succeeds then the test doesn't give as much information
  
