import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type LeadInput } from "@shared/routes";

export function useCreateLead() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: LeadInput) => {
      const validated = api.leads.create.input.parse(data);
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.leads.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit lead');
      }
      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      // In a real app we might invalidate a list, but here it's just a submission
      console.log("Lead submitted successfully");
    },
  });
}
