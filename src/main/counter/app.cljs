(ns counter.app
  (:require [reagent.core :as r]
            [reagent.dom :as dom])
  )
(defonce current-count (r/atom 0))

(defn Application []
  [:div
   [:h1 "Counter"]
   @current-count
   " "
   [:button
    {:onClick (fn [] (swap! current-count inc))}
    "+1"]
   [:button
    {:onClick (fn [] (swap! current-count dec))}
    "-1"]])

(dom/render [Application] (js/document.getElementById "app"))

(defn init []
  (println "App initialization!"))
