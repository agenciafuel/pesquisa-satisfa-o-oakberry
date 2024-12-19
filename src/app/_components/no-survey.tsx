"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

function NoSurvey() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mx-auto mb-12 mt-12 max-w-2xl lg:mt-24"
    >
      <Card className="border-purple-700 bg-purple-900/80">
        <CardContent className="p-8">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold text-white">
              Parece que não temos uma pesquisa para você!
            </h3>
            <p className="text-purple-200">
              Volte mais tarde ou entre em contato conosco
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { NoSurvey };
