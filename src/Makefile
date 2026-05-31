# Makefile
# 2023/10/18 created by Klaus Hoeflinger

CONFIG = Config.mk
include $(CONFIG)

.SUFFIXES: .pdf .tex
.tex.pdf: ; $(LUATEX) $<

SOURCES = Geometry.tex Titles.tex Article.tex Definitions.tex
TARGET  = ../../khMath/pdf

all:	gt la top dtop atop mit ca aha fade fa last sao spaces com dis forms hy fred weid
	@echo "target 'all' done."

gt:	Group_Theory.tex $(SOURCES)
	$(LUATEX) Group_Theory
	@echo "target 'gt' done."

la:	Linear_Algebra.tex $(SOURCES)
	$(LUATEX) Linear_Algebra
	@echo "target 'la' done."

top:	General_Topology.tex $(SOURCES)
	$(LUATEX) General_Topology
	@echo "target 'top' done."

dtop:	Differential_Topology.tex $(SOURCES)
	$(LUATEX) Differential_Topology
	@echo "target 'dtop' done."

atop:	Algebraic_Topology.tex $(SOURCES)
	$(LUATEX) Algebraic_Topology
	@echo "target 'atop' done."

mit:	Measure_and_Integration_Theory.tex $(SOURCES)
	$(LUATEX) Measure_and_Integration_Theory
	@echo "target 'mit' done."

ca:	Complex_Analysis.tex $(SOURCES)
	$(LUATEX) Complex_Analysis
	@echo "target 'ca' done."

aha:	Abstract_Harmonic_Analysis.tex $(SOURCES)
	$(LUATEX) Abstract_Harmonic_Analysis
	@echo "target 'aha' done."

fade:	Functional_Analysis_and_Differential_Equations.tex $(SOURCES)
	$(LUATEX) Functional_Analysis_and_Differential_Equations
	@echo "target 'fade' done."

fa:	Functional_Analysis.tex $(SOURCES)
	$(LUATEX) Functional_Analysis
	@echo "target 'fa' done."

nfa:	Nonlinear_Functional_Analysis.tex $(SOURCES)
	$(LUATEX) Nonlinear_Functional_Analysis
	@echo "target 'nfa' done."

last:	Linear_Operators_and_Spectral_Theory.tex $(SOURCES)
	$(LUATEX) Linear_Operators_and_Spectral_Theory
	@echo "target 'last' done."

sao:	Self-Adjoint_Operators.tex $(SOURCES)
	$(LUATEX) Self-Adjoint_Operators
	@echo "target 'sao' done."

spaces:	Topological_and_Normed_Linear_Spaces.tex $(SOURCES)
	$(LUATEX) Topological_and_Normed_Linear_Spaces
	@echo "target 'spaces' done."

com:	Commutative_Banach_Algebras.tex $(SOURCES)
	$(LUATEX) Commutative_Banach_Algebras
	@echo "target 'com' done."

dis:	Distribution_Theory.tex $(SOURCES)
	$(LUATEX) Distribution_Theory
	@echo "target 'dis' done."

forms:	Coercive_Sesquilinear_Forms.tex $(SOURCES)
	$(LUATEX) Coercive_Sesquilinear_Forms
	@echo "target 'forms' done."

hy:	Hille_Yosida.tex $(SOURCES)
	$(LUATEX) Hille_Yosida
	@echo "target 'hy' done."

fred:	Fredholm_Operators_and_the_Essential_Spectrum.tex
	$(LUATEX) Fredholm_Operators_and_the_Essential_Spectrum
	@echo "target 'fred' done."

weid:	Spectral_Theory_of_Partial_Differential_Operators.tex
	$(LUATEX) Spectral_Theory_of_Partial_Differential_Operators
	@echo "target 'weid' done."

xxx:	xxx.tex $(SOURCES)
	$(LUATEX) xxx
	@echo "target 'xxx' done."

test:	test.tex $(SOURCES)
	$(LUATEX) test
	@echo "target 'test' done."

deploy:	
	cp -p ../target/Group_Theory.pdf $(TARGET)
	cp -p ../target/Linear_Algebra.pdf $(TARGET)
	cp -p ../target/Measure_and_Integration_Theory.pdf $(TARGET)
	cp -p ../target/General_Topology.pdf $(TARGET)
	cp -p ../target/Functional_Analysis.pdf $(TARGET)
	cp -p ../target/Linear_Operators_and_Spectral_Theory.pdf $(TARGET)
	cp -p ../target/Self-Adjoint_Operators.pdf $(TARGET)
	cp -p ../target/Coercive_Sesquilinear_Forms.pdf $(TARGET)
	cp -p ../target/Distribution_Theory.pdf $(TARGET)
	cp -p ../target/Hille_Yosida.pdf $(TARGET)
	cp -p ../target/Fredholm_Operators_and_the_Essential_Spectrum.pdf $(TARGET)
	cp -p ../target/Abstract_Harmonic_Analysis.pdf $(TARGET)
	cp -p ../target/Topological_and_Normed_Linear_Spaces.pdf $(TARGET)
#	cp -p ../target/Complex_Analysis.pdf $(TARGET)
#	cp -p ../target/Algebraic_Topology.pdf $(TARGET)
#	cp -p ../target/Differential_Topology.pdf $(TARGET)
#	cp -p ../target/Nonlinear_Functional_Analysis.pdf $(TARGET)
#
#	cp -p ../target/Spectral_Theory_of_Partial_Differential_Operators.pdf $(TARGET)
	@echo "target 'deploy' done."

clean:
	cd ../target
	rm -f *.aux *.out *.nav *.toc *.snm *.log
	cd ../src
	@echo "target 'clean' done."
