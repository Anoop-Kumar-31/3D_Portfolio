'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const introRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const lines = introRef.current?.querySelectorAll('.quote-line');
    if (!lines || lines.length === 0) return;

    // Prepare initial state of lines (hidden, blurred, offset)
    gsap.set(lines, { opacity: 0, y: 30, filter: 'blur(8px)' });

    // Create GSAP Timeline for the quote reveal
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out screen on complete
        gsap.to(introRef.current, {
          opacity: 0,
          duration: 1.0,
          ease: 'power3.inOut',
          onComplete: onComplete
        });
      }
    });

    timelineRef.current = tl;

    tl.to('.quote-line.line-1', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.4,
      ease: 'power3.out'
    })
    .to('.quote-line.line-2', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.4,
      ease: 'power3.out'
    }, '-=0.8')
    .to('.quote-line.line-3', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.6,
      ease: 'power3.out'
    }, '-=0.8')
    .to({}, { duration: 1.8 }); // dwell time at the end before triggering complete

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    gsap.to(introRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: onComplete
    });
  };

  return (
    <div id="intro-screen" ref={introRef}>
      <div className="quote-wrapper">
        <p className="quote-line line-1">&quot;Jack of all trades,</p>
        <p className="quote-line line-2">master of none,</p>
        <p className="quote-line line-3">but oftentimes better than a master of one.&quot;</p>
      </div>
      <button id="skip-btn" onClick={handleSkip} aria-label="Skip intro animation">
        Skip Intro
      </button>
    </div>
  );
}
