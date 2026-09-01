export default async function handler(req, res) {

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY;

    if (!SUPABASE_URL || !SUPABASE_KEY) {
        return res.status(500).json({
            error: "Supabase não configurado."
        });
    }


    // =========================
    // BUSCAR CONTADORES
    // =========================

    if (req.method === "GET") {

        try {

            const response = await fetch(
                `${SUPABASE_URL}/rest/v1/downloads?select=file_name,download_count`,
                {
                    headers: {
                        apikey: SUPABASE_KEY,
                        Authorization:
                            `Bearer ${SUPABASE_KEY}`
                    }
                }
            );


            if (!response.ok) {

                const error =
                    await response.text();

                return res.status(500).json({
                    error
                });

            }


            const data =
                await response.json();


            return res.status(200).json(data);

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }


    // =========================
    // REGISTRAR DOWNLOAD
    // =========================

    if (req.method === "POST") {

        try {

            const { file_name } =
                req.body;


            if (!file_name) {

                return res.status(400).json({
                    error:
                        "Nome do ficheiro não informado."
                });

            }


            const response = await fetch(
                `${SUPABASE_URL}/rest/v1/rpc/increment_download`,
                {
                    method: "POST",

                    headers: {
                        apikey: SUPABASE_KEY,

                        Authorization:
                            `Bearer ${SUPABASE_KEY}`,

                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        p_file_name:
                            file_name
                    })
                }
            );


            if (!response.ok) {

                const error =
                    await response.text();

                return res.status(500).json({
                    error
                });

            }


            const data =
                await response.json();


            return res.status(200).json({
                success: true,
                download_count: data
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }


    return res.status(405).json({
        error: "Método não permitido."
    });

}
