---
title: "Getting Started with Z3: A Guide"
layout: default
---

<script src="coi-serviceworker.js"></script>
<script src="out/z3.js"> </script>
<script src="helper.js"> </script> 

This is a reconstruction of the [rise4fun Z3](https://web.archive.org/web/20210119175613/https://rise4fun.com/Z3/tutorial/guide) website with a wasm compiled version of Z3 using [z3-wasm](https://github.com/bramvdbogaerde/z3-wasm).


## Tutorials

- [Guide](guide.html)
- [Fixedpoints](fixedpoint.html) (Browser version is WIP)
- [Optimization](optimization.html) (Browser version is WIP)
- [Sequences](sequences.html)
- [Strategies](strategies.html)


<textarea id="z3_input" rows=20 style="width:100%">
(declare-fun f (Int) Int)
(declare-fun a () Int) ; a is a constant
(declare-const b Int) ; syntax sugar for (declare-fun b () Int)
(assert (> a 20))
(assert (> b a))
(assert (= (f 10) 1))
(check-sat)
(get-model)
</textarea>
<button onclick="run_id('z3_input','z3_result')">Run</button>
<br>
<code id="z3_result" style="white-space:pre-wrap"> </code>

## Resources
You may also be interested in 

- <https://github.com/philzook58/z3_tutorial> ([video](https://www.youtube.com/watch?v=56IIrBZy9Rc&feature=youtu.be&ab_channel=BroadInstitute))
- <https://theory.stanford.edu/~nikolaj/programmingz3.html>
- <https://ericpony.github.io/z3py-tutorial/guide-examples.htm>
- <https://yurichev.com/writings/SAT_SMT_by_example.pdf>

